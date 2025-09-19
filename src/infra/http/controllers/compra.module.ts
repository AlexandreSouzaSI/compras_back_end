import { Module } from '@nestjs/common';
import { CompraService } from '../../services/compra.service';
import { CompraController } from './compra.controller';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { CompraRepository } from '@/infra/database/repositories/prisma-compra.repository';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { ICompraRepositoryToken } from '@/application/reporitories/compra.repository.interface';

@Module({
  controllers: [CompraController],
  providers: [
    CompraService,
    PrismaService,
    JwtAuthGuard,
    {
      provide: ICompraRepositoryToken,
      useClass: CompraRepository,
    },
  ],
  exports: [CompraService],
})
export class CompraModule { }

