// produto.module.ts
import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { PrismaProdutoRepository } from './repositories/prisma-produto.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    PrismaService,
    { provide: 'IProdutoRepository', useClass: PrismaProdutoRepository },
  ],
  exports: [ProdutoService],
})
export class ProdutoModule {}
