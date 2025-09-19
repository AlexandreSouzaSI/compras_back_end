// produto.repository.interface.ts
import { Produto } from '@prisma/client';
import { CreateProdutoDto } from '../../infra/http/dtos/produto/create-produto.dto';
import { UpdateProdutoDto } from '../../infra/http/dtos/produto/update-produto.dto';

export interface IProdutoRepository {
  create(data: CreateProdutoDto): Promise<Produto>;
  findAll(): Promise<Produto[]>;
  findById(id: number): Promise<Produto | null>;
  update(id: number, data: UpdateProdutoDto): Promise<Produto>;
  remove(id: number): Promise<void>;
}
