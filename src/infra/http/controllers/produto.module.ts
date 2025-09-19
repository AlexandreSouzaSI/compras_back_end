// produto.module.ts
import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { PrismaProdutoRepository } from '@/infra/database/repositories/prisma-produto.repository';
import { ProdutoService } from '../../services/produto.service';

@Module({
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    PrismaService,
    { provide: 'IProdutoRepository', useClass: PrismaProdutoRepository },
  ],
  exports: [ProdutoService],
})
export class ProdutoModule { }
