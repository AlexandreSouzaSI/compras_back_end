import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { CreateCompraDto } from '@/infra/http/dtos/compra/create-compra.dto';
import { UpdateCompraDto } from '@/infra/http/dtos/compra/update-compra.dto';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';
import { CompraMapper } from '../mappers/compra.mappers';
import { Compra } from '@/application/entities/compra.entity';

@Injectable()
export class CompraRepository implements ICompraRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCompraDto): Promise<Compra> {
    const raw = await this.prisma.compra.create({
      data: {
        pessoaId: data.pessoaId,
        fornecedorId: data.fornecedorId,
        produtos: {
          create: data.produtos.map((produto) => ({
            produtoId: produto.produtoId,
            quantidade: produto.quantidade,
            precoUnitario: produto.precoUnitario,
          })),
        },
      },
      include: { produtos: true, fornecedor: true, pessoa: true },
    });

    return CompraMapper.toDomain(raw)
  }

  async findAll(): Promise<Compra[]> {
    const raws = await this.prisma.compra.findMany({
      include: { produtos: true, fornecedor: true, pessoa: true },
    });

    return raws.map(CompraMapper.toDomain);
  }

  async findById(id: number): Promise<Compra | null> {
    const raw = await this.prisma.compra.findUnique({
      where: { id },
      include: { produtos: true, fornecedor: true, pessoa: true },
    });

    return raw ? CompraMapper.toDomain(raw) : null
  }

  async findByNomeOuValor(nome?: string, valor?: number) {
    const rawCompras = await this.prisma.compra.findMany({
      where: {
        OR: [
          nome ? { fornecedor: { nome: { contains: nome, mode: 'insensitive' } } } : {},
          valor ? { produtos: { some: { precoUnitario: valor } } } : {},
        ],
      },
      include: { produtos: true, fornecedor: true, pessoa: true },
    });

    return rawCompras.map(CompraMapper.toDomain);
  }

  async update(id: number, data: UpdateCompraDto) {
    const updatedRaw = await this.prisma.compra.update({
      where: { id },
      data: {
        pessoaId: data.pessoaId,
        fornecedorId: data.fornecedorId,
        produtos: data.produtos
          ? {
            deleteMany: {},
            create: data.produtos.map((produto) => ({
              produtoId: produto.produtoId,
              quantidade: produto.quantidade,
              precoUnitario: produto.precoUnitario,
            })),
          }
          : undefined,
      },
      include: { produtos: true, fornecedor: true, pessoa: true },
    });

    return CompraMapper.toDomain(updatedRaw);
  }

  async delete(id: number) {
    await this.prisma.compra.delete({
      where: { id },
    });
  }
}
