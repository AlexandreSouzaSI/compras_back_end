import { Pessoa } from '@prisma/client';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';

export interface IPessoaRepository {
  findByEmail(email: string): Promise<Pessoa | null>;
  create(data: CreatePessoaDto & { senha: string }): Promise<Pessoa>;
  findById(id: number): Promise<Pessoa | null>;
}
