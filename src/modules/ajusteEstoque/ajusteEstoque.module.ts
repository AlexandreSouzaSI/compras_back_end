import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AjusteEstoqueController } from './ajusteEstoque.controller';
import { AjusteEstoqueService } from './ajusteEstoque.service';
import { PrismaAjusteEstoqueRepository } from './repositories/ajusteEstoque.repository.interface';

@Module({
  controllers: [AjusteEstoqueController],
  providers: [AjusteEstoqueService, PrismaAjusteEstoqueRepository, PrismaService],
})
export class AjusteEstoqueModule {}
