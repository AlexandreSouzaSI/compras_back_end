import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaSaidaEstoqueRepository } from './repositories/prisma-saida-estoque.repository';
import { CreateSaidaEstoqueDto } from './dto/create-saida-estoque.dto';
import { UpdateSaidaEstoqueDto } from './dto/update-saida-estoque.dto';

@Injectable()
export class SaidaEstoqueService {
  constructor(
    private repo: PrismaSaidaEstoqueRepository,
    private prisma: PrismaService,
  ) {}

  async create(dto: CreateSaidaEstoqueDto) {
    const produto = await this.prisma.produto.findUnique({ where: { id: dto.produtoId } });
    if (!produto) throw new NotFoundException('Produto não encontrado');

    if (produto.estoque < dto.quantidade) {
      throw new Error('Estoque insuficiente para essa saída');
    }

    // Atualiza estoque
    await this.prisma.produto.update({
      where: { id: dto.produtoId },
      data: { estoque: produto.estoque - dto.quantidade },
    });

    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const saida = await this.repo.findOne(id);
    if (!saida) throw new NotFoundException('Saída não encontrada');
    return saida;
  }

  update(id: number, dto: UpdateSaidaEstoqueDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.remove(id);
  }
}
