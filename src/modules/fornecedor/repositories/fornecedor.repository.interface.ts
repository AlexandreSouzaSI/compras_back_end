// fornecedor.repository.interface.ts
import { Fornecedor, Produto } from '@prisma/client';
import { CreateFornecedorDto } from '../dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from '../dto/update-fornecedor.dto';

export interface IFornecedorRepository {
  create(data: CreateFornecedorDto): Promise<Fornecedor>;
  findAll(): Promise<Fornecedor[]>;
  findById(id: number): Promise<Fornecedor | null>;
  update(id: number, data: UpdateFornecedorDto): Promise<Fornecedor>;
  remove(id: number): Promise<void>;
  findProdutosByFornecedor(fornecedorId: number): Promise<(Fornecedor & { produtos: Produto[] }) | null>;
}
