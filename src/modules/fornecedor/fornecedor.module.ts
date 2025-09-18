// fornecedor.module.ts
import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';
import { FornecedorService } from './fornecedor.service';
import { PrismaFornecedorRepository } from './repositories/prisma-fornecedor.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FornecedorController],
  providers: [
    FornecedorService,
    PrismaService,
    { provide: 'IFornecedorRepository', useClass: PrismaFornecedorRepository },
  ],
  exports: [FornecedorService],
})
export class FornecedorModule {}
