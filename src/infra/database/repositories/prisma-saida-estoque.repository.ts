import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ISaidaEstoqueRepository } from '../../../application/reporitories/saida-estoque.repository.interface';
import { CreateSaidaEstoqueDto } from '@/infra/http/dtos/saidaEstoque/create-saida-estoque.dto';
import { UpdateSaidaEstoqueDto } from '@/infra/http/dtos/saidaEstoque/update-saida-estoque.dto';

@Injectable()
export class PrismaSaidaEstoqueRepository implements ISaidaEstoqueRepository {
  constructor(private prisma: PrismaService) { }

  create(data: CreateSaidaEstoqueDto) {
    return this.prisma.saidaEstoque.create({ data });
  }

  findAll() {
    return this.prisma.saidaEstoque.findMany({ include: { produto: true } });
  }

  findOne(id: number) {
    return this.prisma.saidaEstoque.findUnique({ where: { id }, include: { produto: true } });
  }

  update(id: number, data: UpdateSaidaEstoqueDto) {
    return this.prisma.saidaEstoque.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.prisma.saidaEstoque.delete({ where: { id } });
  }
}
