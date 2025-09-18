// src/modules/ajuste-estoque/repositories/ajuste-estoque.repository.interface.ts
import { AjusteEstoque } from '@prisma/client';
import { CreateAjusteEstoqueDto } from '../dto/create-ajusteEstoque.dto';
import { UpdateAjusteEstoqueDto } from '../dto/update-ajusteEstoque.dto';

export interface IAjusteEstoqueRepository {
  create(data: CreateAjusteEstoqueDto): Promise<AjusteEstoque>;
  findAll(): Promise<AjusteEstoque[]>;
  findOne(id: number): Promise<AjusteEstoque | null>;
  update(id: number, data: UpdateAjusteEstoqueDto): Promise<AjusteEstoque>;
  remove(id: number): Promise<void>;
}
