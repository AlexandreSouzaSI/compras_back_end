import { Module } from '@nestjs/common';
import { SaidaEstoqueController } from './saida-estoque.controller';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { PrismaSaidaEstoqueRepository } from '@/infra/database/repositories/prisma-saida-estoque.repository';
import { SaidaEstoqueService } from '../../services/saida-estoque.service';

@Module({
  controllers: [SaidaEstoqueController],
  providers: [SaidaEstoqueService, PrismaSaidaEstoqueRepository, PrismaService],
})
export class SaidaEstoqueModule { }
