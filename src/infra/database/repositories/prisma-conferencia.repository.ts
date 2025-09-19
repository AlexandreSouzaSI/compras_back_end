import { Conferencia } from '@/application/entities/conferencia.entity';
import { PrismaService } from '../prisma/prisma.service';
import { StatusConferencia } from '@prisma/client';
import { Compra } from '@/application/entities/compra.entity';
import { Pessoa } from '@/application/entities/pessoa.entity';
import { IConferenciaRepository } from '@/application/reporitories/conferencia.repository.interface';

export class PrismaConferenciaRepository implements IConferenciaRepository {
  constructor(private prisma: PrismaService) { }

  async createOrUpdate(data: { pessoaId: number; compraId: number; status: string; observacao?: string; }): Promise<Conferencia> {
    const existing = await this.prisma.conferencia.findFirst({
      where: { pessoaId: data.pessoaId, compraId: data.compraId },
      include: { compra: true, pessoa: true },
    });

    let conf;
    if (existing) {
      // Atualiza
      conf = await this.prisma.conferencia.update({
        where: { id: existing.id },
        data: {
          status: data.status as StatusConferencia,
          observacao: data.observacao ?? null,
        },
        include: { compra: true, pessoa: true },
      });
    } else {
      // Cria
      conf = await this.prisma.conferencia.create({
        data: {
          pessoaId: data.pessoaId,
          compraId: data.compraId,
          status: data.status as StatusConferencia,
          observacao: data.observacao ?? null,
        },
        include: { compra: true, pessoa: true },
      });
    }

    return this.mapToEntity(conf);
  }

  private mapToEntity(conf: any): Conferencia {
    const compraEntity = new Compra(
      conf.compra.id,
      conf.compra.pessoaId,
      conf.compra.fornecedorId,
      conf.compra.produtos ?? [],
      conf.compra.fornecedor,
      conf.compra.pessoa,
      conf.compra.createdAt,
      conf.compra.updatedAt,
      conf.compra.data,
      conf.compra.produtos,
      conf.compra.ajustado,
    );

    const pessoaEntity = new Pessoa(
      conf.pessoa.id,
      conf.pessoa.nome,
      conf.pessoa.email ?? undefined,
      conf.pessoa.senha,
      conf.pessoa.cargo,
      conf.pessoa.ativo,
      conf.pessoa.createdAt,
      conf.pessoa.updatedAt
    );

    const observacao = conf.observacao ?? undefined;

    return new Conferencia(
      conf.id,
      conf.status as StatusConferencia,
      compraEntity,
      pessoaEntity,
      observacao,
      conf.data
    );
  }

  async create(conferencia: Conferencia): Promise<Conferencia> {
    const created = await this.prisma.conferencia.create({
      data: {
        compraId: conferencia.compra.id,
        pessoaId: conferencia.pessoa.id,
        status: conferencia.status,
        observacao: conferencia.observacao ?? null,
      },
      include: { compra: true, pessoa: true },
    });

    return this.mapToEntity(created);
  }

  async update(conferencia: Conferencia): Promise<Conferencia> {
    const updated = await this.prisma.conferencia.update({
      where: { id: conferencia.id },
      data: {
        status: conferencia.status,
        observacao: conferencia.observacao ?? null,
      },
      include: { compra: true, pessoa: true },
    });

    return this.mapToEntity(updated);
  }

  async findById(id: number): Promise<Conferencia | null> {
    const conf = await this.prisma.conferencia.findUnique({
      where: { id },
      include: { compra: true, pessoa: true },
    });
    if (!conf) return null;
    return this.mapToEntity(conf);
  }

  async findAll(): Promise<Conferencia[]> {
    const confs = await this.prisma.conferencia.findMany({
      include: { compra: true, pessoa: true },
    });
    return confs.map(c => this.mapToEntity(c));
  }

  async findByFilters(nome?: string, status?: StatusConferencia, valor?: number): Promise<Conferencia[]> {
    const confs = await this.prisma.conferencia.findMany({
      where: {
        AND: [
          nome ? { compra: { fornecedor: { nome: { contains: nome, mode: 'insensitive' } } } } : {},
          status ? { status } : {},
          valor ? { compra: { produtos: { some: { precoUnitario: valor } } } } : {},
        ],
      },
      include: { compra: true, pessoa: true },
    });

    return confs.map(c => this.mapToEntity(c));
  }
}
