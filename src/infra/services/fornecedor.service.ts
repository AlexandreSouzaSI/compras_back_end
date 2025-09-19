// fornecedor.service.ts
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFornecedorDto } from '../http/dtos/fornecedor/create-fornecedor.dto';
import { UpdateFornecedorDto } from '../http/dtos/fornecedor/update-fornecedor.dto';
import { FornecedorResponseDto } from '../http/dtos/fornecedor/fornecedor-response.dto';
import type { IFornecedorRepository } from '@/application/reporitories/fornecedor.repository.interface';

@Injectable()
export class FornecedorService {
  constructor(
    @Inject('IFornecedorRepository')
    private readonly fornecedorRepo: IFornecedorRepository) { }

  private toResponse(entity: any): FornecedorResponseDto {
    return {
      id: entity.id,
      nome: entity.nome,
      cnpj: entity.cnpj,
      criatedAt: entity.criadoEm,
    };
  }

  async create(dto: CreateFornecedorDto): Promise<FornecedorResponseDto> {
    const fornecedor = await this.fornecedorRepo.create(dto);
    return this.toResponse(fornecedor);
  }

  async findAll(): Promise<FornecedorResponseDto[]> {
    const fornecedores = await this.fornecedorRepo.findAll();
    return fornecedores.map(this.toResponse);
  }

  async findOne(id: number): Promise<FornecedorResponseDto> {
    const fornecedor = await this.fornecedorRepo.findById(id);
    if (!fornecedor) throw new NotFoundException('Fornecedor não encontrado');
    return this.toResponse(fornecedor);
  }

  async update(id: number, dto: UpdateFornecedorDto): Promise<FornecedorResponseDto> {
    const fornecedor = await this.fornecedorRepo.update(id, dto);
    return this.toResponse(fornecedor);
  }

  async remove(id: number): Promise<void> {
    const fornecedor = await this.fornecedorRepo.findById(id);
    if (!fornecedor) throw new NotFoundException('Fornecedor não encontrado');
    await this.fornecedorRepo.remove(id);
  }

  async getProdutosByFornecedor(fornecedorId: number) {
    const fornecedor = await this.fornecedorRepo.findProdutosByFornecedor(fornecedorId);
    if (!fornecedor) throw new NotFoundException('Fornecedor não encontrado');

    return fornecedor.produtos; // ✅ Agora produtos existe
  }


}
