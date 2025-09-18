// produto.repository.interface.ts
import { Produto } from '@prisma/client';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';

export interface IProdutoRepository {
  create(data: CreateProdutoDto): Promise<Produto>;
  findAll(): Promise<Produto[]>;
  findById(id: number): Promise<Produto | null>;
  update(id: number, data: UpdateProdutoDto): Promise<Produto>;
  remove(id: number): Promise<void>;
}
