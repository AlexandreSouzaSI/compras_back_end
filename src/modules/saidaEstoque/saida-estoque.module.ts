import { Module } from '@nestjs/common';
import { SaidaEstoqueService } from './saida-estoque.service';
import { SaidaEstoqueController } from './saida-estoque.controller';
import { PrismaSaidaEstoqueRepository } from './repositories/prisma-saida-estoque.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SaidaEstoqueController],
  providers: [SaidaEstoqueService, PrismaSaidaEstoqueRepository, PrismaService],
})
export class SaidaEstoqueModule {}
