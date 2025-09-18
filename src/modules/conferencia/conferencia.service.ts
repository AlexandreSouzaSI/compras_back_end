import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IConferenciaRepository } from './repositories/conferencia.repository.interface';
import { CreateConferenciaDto } from './dto/create-conferencia.dto';
import { UpdateConferenciaDto } from './dto/update-conferencia.dto';
import { ConferenciaResponseDto } from './dto/conferencia-response.dto';
import { PrismaService } from '../prisma/prisma.service';
import { StatusConferencia } from '@prisma/client';

@Injectable()
export class ConferenciaService {
  constructor(
    @Inject('IConferenciaRepository')
    private readonly conferenciaRepo: IConferenciaRepository,
    private readonly prisma: PrismaService, // para atualizar estoque
  ) {}

  private toResponse(c: any): ConferenciaResponseDto {
    return {
      id: c.id,
      status: c.status,
      observacao: c.observacao,
      data: c.data,
      pessoaId: c.pessoaId,
      compraId: c.compraId,
    };
  }

  async create(dto: CreateConferenciaDto): Promise<ConferenciaResponseDto> {
    const compra = await this.prisma.compra.findUnique({
      where: { id: dto.compraId },
      include: { produtos: true },
    });

    if (!compra) throw new NotFoundException('Compra não encontrada');

    const conferencia = await this.conferenciaRepo.create(dto);

    if (dto.status === StatusConferencia.APROVADO) {
      // Atualiza estoque
      for (const cp of compra.produtos) {
        await this.prisma.produto.update({
          where: { id: cp.produtoId },
          data: { estoque: { increment: cp.quantidade } },
        });
      }
    }

    return this.toResponse(conferencia);
  }

  async findOne(id: number): Promise<ConferenciaResponseDto> {
    const conferencia = await this.conferenciaRepo.findById(id);
    if (!conferencia) throw new NotFoundException('Conferência não encontrada');
    return this.toResponse(conferencia);
  }

  async findAll(): Promise<ConferenciaResponseDto[]> {
    const conferencias = await this.conferenciaRepo.findAll();
    return conferencias.map(this.toResponse);
  }

  async update(id: number, dto: UpdateConferenciaDto): Promise<ConferenciaResponseDto> {
    const conferencia = await this.conferenciaRepo.update(id, dto);
    return this.toResponse(conferencia);
  }

  async remove(id: number): Promise<void> {
    return this.conferenciaRepo.remove(id);
  }
}
