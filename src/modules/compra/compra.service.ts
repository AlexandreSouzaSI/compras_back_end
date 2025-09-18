import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ICompraRepository } from './repositories/compra.repository.interface';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { CompraResponseDto } from './dto/compra-response.dto';

@Injectable()
export class CompraService {
  constructor(
    @Inject('ICompraRepository')
    private readonly compraRepo: ICompraRepository) {}

  private toResponse(c: any): CompraResponseDto {
    return {
      id: c.id,
      data: c.data,
      pessoaId: c.pessoaId,
      fornecedorId: c.fornecedorId,
      produtos: c.produtos.map((p) => ({
        produtoId: p.produtoId,
        quantidade: p.quantidade,
        precoUnitario: p.precoUnitario,
      })),
    };
  }

  async create(dto: CreateCompraDto): Promise<CompraResponseDto> {
    const compra = await this.compraRepo.create(dto);
    return this.toResponse(compra);
  }

  async findOne(id: number): Promise<CompraResponseDto> {
    const compra = await this.compraRepo.findById(id);
    if (!compra) throw new NotFoundException('Compra não encontrada');
    return this.toResponse(compra);
  }

  async findAll(): Promise<CompraResponseDto[]> {
    const compras = await this.compraRepo.findAll();
    return compras.map(this.toResponse);
  }

  async update(id: number, dto: UpdateCompraDto): Promise<CompraResponseDto> {
    const compra = await this.compraRepo.update(id, dto);
    return this.toResponse(compra);
  }

  async remove(id: number): Promise<void> {
    return this.compraRepo.remove(id);
  }
}
