import { Injectable } from '@nestjs/common';
import { IPessoaRepository } from './pessoa.repository.interface';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';

@Injectable()
export class PrismaPessoaRepository implements IPessoaRepository {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.pessoa.findUnique({ where: { email } });
  }

  create(data: CreatePessoaDto & { senha: string }) {
    return this.prisma.pessoa.create({ data });
  }

  findById(id: number) {
    return this.prisma.pessoa.findUnique({ where: { id } });
  }
}
