import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IConferenciaRepository } from './conferencia.repository.interface';
import { CreateConferenciaDto } from '../dto/create-conferencia.dto';
import { UpdateConferenciaDto } from '../dto/update-conferencia.dto';

@Injectable()
export class PrismaConferenciaRepository implements IConferenciaRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateConferenciaDto) {
    return this.prisma.conferencia.create({
      data: {
        pessoaId: data.pessoaId,
        compraId: data.compraId,
        status: data.status,
        observacao: data.observacao,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.conferencia.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return this.prisma.conferencia.findMany();
  }

  async update(id: number, data: UpdateConferenciaDto) {
    return this.prisma.conferencia.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.conferencia.delete({ where: { id } });
  }
}
