import { Injectable } from '@nestjs/common';
import { IPessoaRepository } from '../../../application/reporitories/pessoa.repository.interface';
import { CreatePessoaDto } from '../../http/dtos/pessoa/create-pessoa.dto';
import { UpdatePessoaDto } from '../../http/dtos/pessoa/update-pessoa.dto';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Pessoa as PessoaEntity } from '@/application/entities/pessoa.entity';
import { Cargo } from '@prisma/client';
import { PessoaMapper } from '../mappers/pessoa.mappers';

@Injectable()
export class PrismaPessoaRepository implements IPessoaRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreatePessoaDto & { senha: string }): Promise<PessoaEntity> {
    const raw = await this.prisma.pessoa.create({ data });
    return PessoaMapper.toDomain(raw);
  }

  async findById(id: number): Promise<PessoaEntity | null> {
    const raw = await this.prisma.pessoa.findUnique({
      where: { id },
      include: { compras: true, conferencias: true },
    });
    return raw ? PessoaMapper.toDomain(raw) : null;
  }

  async findByEmail(email: string): Promise<PessoaEntity | null> {
    const raw = await this.prisma.pessoa.findUnique({
      where: { email },
      include: { compras: true, conferencias: true },
    });
    return raw ? PessoaMapper.toDomain(raw) : null;
  }

  async findByNomeOuCargo(nome?: string, cargo?: Cargo): Promise<PessoaEntity> {
    const raw = await this.prisma.pessoa.findMany({
      where: {
        AND: [
          nome ? { nome: { contains: nome, mode: 'insensitive' } } : {},
          cargo ? { cargo } : {},
        ],
      },
      include: { compras: true, conferencias: true },
    });
    return PessoaMapper.toDomain(raw);
  }

  async findAll(
    filter?: { nome?: string; cargo?: Cargo },
    pagination?: { skip?: number; take?: number },
  ): Promise<PessoaEntity[]> {
    const raws = await this.prisma.pessoa.findMany({
      where: {
        AND: [
          filter?.nome ? { nome: { contains: filter.nome, mode: 'insensitive' } } : {},
          filter?.cargo ? { cargo: filter.cargo } : {},
        ],
      },
      skip: pagination?.skip,
      take: pagination?.take,
      include: { compras: true, conferencias: true },
    });
    return raws.map(PessoaMapper.toDomain);
  }

  async update(id: number, dto: UpdatePessoaDto & { senha?: string }): Promise<PessoaEntity> {
    const raw = await this.prisma.pessoa.update({
      where: { id },
      data: dto,
      include: { compras: true, conferencias: true },
    });
    return PessoaMapper.toDomain(raw);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.pessoa.delete({ where: { id } });
  }
}
