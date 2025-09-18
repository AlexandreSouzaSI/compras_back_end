// produto.service.ts
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IProdutoRepository } from './repositories/produto.repository.interface';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoResponseDto } from './dto/produto-response.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('IProdutoRepository')
    private readonly produtoRepo: IProdutoRepository) {}

  private toResponse(entity: any): ProdutoResponseDto {
    return {
      id: entity.id,
      nome: entity.nome,
      descricao: entity.descricao,
      preco: entity.preco,
      estoque: entity.estoque,
      fornecedorId: entity.fornecedorId,
      criatedAt: entity.criadoEm,
    };
  }

  async create(dto: CreateProdutoDto): Promise<ProdutoResponseDto> {
    const produto = await this.produtoRepo.create(dto);
    return this.toResponse(produto);
  }

  async findAll(): Promise<ProdutoResponseDto[]> {
    const produtos = await this.produtoRepo.findAll();
    return produtos.map((p) => this.toResponse(p));
  }

  async findOne(id: number): Promise<ProdutoResponseDto> {
    const produto = await this.produtoRepo.findById(id);
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return this.toResponse(produto);
  }

  async update(id: number, dto: UpdateProdutoDto): Promise<ProdutoResponseDto> {
    const produto = await this.produtoRepo.update(id, dto);
    return this.toResponse(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.produtoRepo.findById(id);
    if (!produto) throw new NotFoundException('Produto não encontrado');
    await this.produtoRepo.remove(id);
  }
}
