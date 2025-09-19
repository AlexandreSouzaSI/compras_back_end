import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infra/database/prisma/prisma.service';
import { CreateAjusteEstoqueDto } from '../../infra/http/dtos/ajusteEstoque/create-ajusteEstoque.dto';
import { UpdateAjusteEstoqueDto } from '../../infra/http/dtos/ajusteEstoque/update-ajusteEstoque.dto';

@Injectable()
export class PrismaAjusteEstoqueRepository {
  constructor(private prisma: PrismaService) { }

  create(data: CreateAjusteEstoqueDto) {
    return this.prisma.ajusteEstoque.create({ data });
  }

  findAll() {
    return this.prisma.ajusteEstoque.findMany({
      include: { produto: true },
    });
  }

  findOne(id: number) {
    return this.prisma.ajusteEstoque.findUnique({
      where: { id },
      include: { produto: true },
    });
  }

  update(id: number, data: UpdateAjusteEstoqueDto) {
    return this.prisma.ajusteEstoque.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.ajusteEstoque.delete({
      where: { id },
    });
  }
}
