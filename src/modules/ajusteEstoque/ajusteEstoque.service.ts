import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaAjusteEstoqueRepository } from './repositories/ajusteEstoque.repository.interface';
import { CreateAjusteEstoqueDto } from './dto/create-ajusteEstoque.dto';
import { UpdateAjusteEstoqueDto } from './dto/update-ajusteEstoque.dto';

@Injectable()
export class AjusteEstoqueService {
  constructor(
    private repo: PrismaAjusteEstoqueRepository,
    private prisma: PrismaService,
  ) {}

  async create(dto: CreateAjusteEstoqueDto) {
    const produto = await this.prisma.produto.findUnique({
      where: { id: dto.produtoId },
    });
    if (!produto) throw new NotFoundException('Produto não encontrado');

    // Atualiza estoque
    await this.prisma.produto.update({
      where: { id: dto.produtoId },
      data: { estoque: produto.estoque + dto.quantidade },
    });

    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const ajuste = await this.repo.findOne(id);
    if (!ajuste) throw new NotFoundException('Ajuste não encontrado');
    return ajuste;
  }

  update(id: number, dto: UpdateAjusteEstoqueDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.remove(id);
  }
}
