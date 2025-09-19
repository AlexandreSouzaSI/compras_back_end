// fornecedor.module.ts
import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';
import { FornecedorService } from '../../services/fornecedor.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { PrismaFornecedorRepository } from '@/infra/database/repositories/prisma-fornecedor.repository';

@Module({
  controllers: [FornecedorController],
  providers: [
    FornecedorService,
    PrismaService,
    { provide: 'IFornecedorRepository', useClass: PrismaFornecedorRepository },
  ],
  exports: [FornecedorService],
})
export class FornecedorModule { }
