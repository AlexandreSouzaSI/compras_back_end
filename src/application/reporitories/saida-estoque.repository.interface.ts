import { CreateSaidaEstoqueDto } from '@/infra/http/dtos/saidaEstoque/create-saida-estoque.dto';
import { UpdateSaidaEstoqueDto } from '@/infra/http/dtos/saidaEstoque/update-saida-estoque.dto';
import { SaidaEstoque } from '@prisma/client';

export interface ISaidaEstoqueRepository {
  create(data: CreateSaidaEstoqueDto): Promise<SaidaEstoque>;
  findAll(): Promise<SaidaEstoque[]>;
  findOne(id: number): Promise<SaidaEstoque | null>;
  update(id: number, data: UpdateSaidaEstoqueDto): Promise<SaidaEstoque>;
  remove(id: number): Promise<void>;
}
