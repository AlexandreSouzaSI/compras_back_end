// fornecedor.repository.interface.ts
import { CreateFornecedorDto } from '@/infra/http/dtos/fornecedor/create-fornecedor.dto';
import { UpdateFornecedorDto } from '@/infra/http/dtos/fornecedor/update-fornecedor.dto';
import { Fornecedor, Produto } from '@prisma/client';

export interface IFornecedorRepository {
  create(data: CreateFornecedorDto): Promise<Fornecedor>;
  findAll(): Promise<Fornecedor[]>;
  findById(id: number): Promise<Fornecedor | null>;
  update(id: number, data: UpdateFornecedorDto): Promise<Fornecedor>;
  remove(id: number): Promise<void>;
  findProdutosByFornecedor(fornecedorId: number): Promise<(Fornecedor & { produtos: Produto[] }) | null>;
}
