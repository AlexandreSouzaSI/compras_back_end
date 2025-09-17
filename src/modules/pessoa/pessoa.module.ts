import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { PrismaPessoaRepository } from './repositories/prisma-pessoa.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PessoaController],
  providers: [
    PessoaService,
    PrismaService,
    { provide: 'IPessoaRepository', useClass: PrismaPessoaRepository },
    // se usar tokens, injete com @Inject('IPessoaRepository') no service
  ],
  exports: [PessoaService]
})
export class PessoasModule {}
