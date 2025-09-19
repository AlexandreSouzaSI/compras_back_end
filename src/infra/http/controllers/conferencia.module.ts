import { Module } from '@nestjs/common';
import { ConferenciaController } from './conferencia.controller';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { PrismaConferenciaRepository } from '@/infra/database/repositories/prisma-conferencia.repository';
import { ConferenciaService } from '../../services/conferencia.service';

@Module({
  controllers: [ConferenciaController],
  providers: [
    ConferenciaService,
    PrismaService,
    { provide: 'IConferenciaRepository', useClass: PrismaConferenciaRepository },
  ],
})
export class ConferenciaModule { }
