import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { PrismaPessoaRepository } from '@/infra/database/repositories/prisma-pessoa.repository';
import { PessoaService } from '../../services/pessoa.service';
import { IPessoaRepositoryToken } from '@/application/reporitories/pessoa.repository.interface';

@Module({
  controllers: [PessoaController],
  providers: [
    PessoaService,
    PrismaService,
    { provide: IPessoaRepositoryToken, useClass: PrismaPessoaRepository },
  ],
  exports: [PessoaService]
})
export class PessoasModule { }
