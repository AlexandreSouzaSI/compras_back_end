import { SaidaEstoque } from '@prisma/client';
import { CreateSaidaEstoqueDto } from '../dto/create-saida-estoque.dto';
import { UpdateSaidaEstoqueDto } from '../dto/update-saida-estoque.dto';

export interface ISaidaEstoqueRepository {
  create(data: CreateSaidaEstoqueDto): Promise<SaidaEstoque>;
  findAll(): Promise<SaidaEstoque[]>;
  findOne(id: number): Promise<SaidaEstoque | null>;
  update(id: number, data: UpdateSaidaEstoqueDto): Promise<SaidaEstoque>;
  remove(id: number): Promise<void>;
}
