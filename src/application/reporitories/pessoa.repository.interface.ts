import { Cargo } from "@prisma/client";
import { CreatePessoaDto } from "../../infra/http/dtos/pessoa/create-pessoa.dto";
import { UpdatePessoaDto } from "../../infra/http/dtos/pessoa/update-pessoa.dto";
import { Pessoa } from "../entities/pessoa.entity";

export const IPessoaRepositoryToken = Symbol('IPessoaRepository');

export interface IPessoaRepository {
  create(dto: CreatePessoaDto): Promise<Pessoa>;
  findById(id: number): Promise<Pessoa | null>;
  findByEmail(email: string): Promise<Pessoa | null>;
  findByNomeOuCargo(nome?: string, cargo?: Cargo): Promise<Pessoa | null>;
  findAll(filter?: { nome?: string, cargo?: Cargo }, pagination?);
  update(id: number, dto: UpdatePessoaDto): Promise<Pessoa>;
  remove(id: number): Promise<void>;
}
