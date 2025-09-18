import { Module } from '@nestjs/common';
import { CompraController } from './compra.controller';
import { CompraService } from './compra.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaCompraRepository } from './repositories/prisma-compra.repository';

@Module({
  controllers: [CompraController],
  providers: [
    CompraService,
    PrismaService,
    { provide: 'ICompraRepository', useClass: PrismaCompraRepository },
  ],
})
export class CompraModule {}
