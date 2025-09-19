import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { AjusteEstoqueController } from './ajusteEstoque.controller';
import { PrismaAjusteEstoqueRepository } from '../../../application/reporitories/ajusteEstoque.repository.interface';
import { AjusteEstoqueService } from '../../services/ajusteEstoque.service';

@Module({
  controllers: [AjusteEstoqueController],
  providers: [AjusteEstoqueService, PrismaAjusteEstoqueRepository, PrismaService],
})
export class AjusteEstoqueModule { }
