import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICompraRepository } from './compra.repository.interface';
import { CreateCompraDto } from '../dto/create-compra.dto';
import { UpdateCompraDto } from '../dto/update-compra.dto';

@Injectable()
export class PrismaCompraRepository implements ICompraRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCompraDto) {
    return this.prisma.compra.create({
      data: {
        pessoaId: data.pessoaId,
        fornecedorId: data.fornecedorId,
        produtos: {
          create: data.produtos.map((p) => ({
            produtoId: p.produtoId,
            quantidade: p.quantidade,
            precoUnitario: p.precoUnitario,
          })),
        },
      },
      include: { produtos: true },
    });
  }

  async findById(id: number) {
    return this.prisma.compra.findUnique({
      where: { id },
      include: { produtos: true },
    });
  }

  async findAll() {
    return this.prisma.compra.findMany({
      include: { produtos: true },
    });
  }

  async update(id: number, data: UpdateCompraDto) {
    return this.prisma.compra.update({
      where: { id },
      data: {
        pessoaId: data.pessoaId,
        fornecedorId: data.fornecedorId,
        // se quiser atualizar produtos, faz lógica extra aqui
      },
      include: { produtos: true },
    });
  }

  async remove(id: number) {
    await this.prisma.compra.delete({ where: { id } });
  }
}
