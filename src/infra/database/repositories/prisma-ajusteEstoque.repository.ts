// src/modules/ajuste-estoque/repositories/ajuste-estoque.repository.interface.ts
import { CreateAjusteEstoqueDto } from '@/infra/http/dtos/ajusteEstoque/create-ajusteEstoque.dto';
import { UpdateAjusteEstoqueDto } from '@/infra/http/dtos/ajusteEstoque/update-ajusteEstoque.dto';
import { AjusteEstoque } from '@prisma/client';

export interface IAjusteEstoqueRepository {
  create(data: CreateAjusteEstoqueDto): Promise<AjusteEstoque>;
  findAll(): Promise<AjusteEstoque[]>;
  findOne(id: number): Promise<AjusteEstoque | null>;
  update(id: number, data: UpdateAjusteEstoqueDto): Promise<AjusteEstoque>;
  remove(id: number): Promise<void>;
}
