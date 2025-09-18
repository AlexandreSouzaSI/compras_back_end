import { Module } from '@nestjs/common';
import { ConferenciaController } from './conferencia.controller';
import { ConferenciaService } from './conferencia.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaConferenciaRepository } from './repositories/prisma-conferencia.repository';

@Module({
  controllers: [ConferenciaController],
  providers: [
    ConferenciaService,
    PrismaService,
    { provide: 'IConferenciaRepository', useClass: PrismaConferenciaRepository },
  ],
})
export class ConferenciaModule {}
