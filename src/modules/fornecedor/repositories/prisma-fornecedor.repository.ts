// prisma-fornecedor.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IFornecedorRepository } from './fornecedor.repository.interface';
import { Fornecedor } from '@prisma/client';
import { CreateFornecedorDto } from '../dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from '../dto/update-fornecedor.dto';

@Injectable()
export class PrismaFornecedorRepository implements IFornecedorRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateFornecedorDto): Promise<Fornecedor> {
    return this.prisma.fornecedor.create({ data });
  }

  findAll(): Promise<Fornecedor[]> {
    return this.prisma.fornecedor.findMany();
  }

  findById(id: number): Promise<Fornecedor | null> {
    return this.prisma.fornecedor.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateFornecedorDto): Promise<Fornecedor> {
    return this.prisma.fornecedor.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.fornecedor.delete({ where: { id } });
  }

  async findProdutosByFornecedor(fornecedorId: number) {
    return this.prisma.fornecedor.findUnique({
      where: { id: fornecedorId },
      include: {
        produtos: true, // 🔥 Aqui você diz para o Prisma trazer os produtos relacionados
        },
    });
  }
}
