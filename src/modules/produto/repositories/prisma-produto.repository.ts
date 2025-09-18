// prisma-produto.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IProdutoRepository } from './produto.repository.interface';
import { Produto } from '@prisma/client';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';

@Injectable()
export class PrismaProdutoRepository implements IProdutoRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProdutoDto): Promise<Produto> {
    return this.prisma.produto.create({ data });
  }

  findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany();
  }

  findById(id: number): Promise<Produto | null> {
    return this.prisma.produto.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateProdutoDto): Promise<Produto> {
    return this.prisma.produto.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.produto.delete({ where: { id } });
  }
}
