import { Inject, Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import * as bcrypt from 'bcrypt';
import { PessoaResponseDto } from './dto/pessoa-response.dto';
import type { IPessoaRepository } from './repositories/pessoa.repository.interface';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('IPessoaRepository')
    private readonly pessoaRepo: IPessoaRepository) {}

  private toResponse(p: any): PessoaResponseDto {
    const { senha, ...rest } = p;
    return rest;
  }

  async create(dto: CreatePessoaDto): Promise<PessoaResponseDto> {
    const existing = await this.pessoaRepo.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email já cadastrado');
    console.log("aqui")
    const hashed = await bcrypt.hash(dto.senha, 10);
    const persisted = await this.pessoaRepo.create({ ...dto, senha: hashed });
    return this.toResponse(persisted);
  }

  async findOne(id: number): Promise<PessoaResponseDto> {
    const p = await this.pessoaRepo.findById(id);
    if (!p) throw new NotFoundException('Pessoa não encontrada');
    return this.toResponse(p);
  }

  async findByEmail(email: string): Promise<PessoaResponseDto> {
    const p = await this.pessoaRepo.findByEmail(email);
    if (!p) throw new NotFoundException('Pessoa não encontrada');
    return this.toResponse(p);
  }

  async findByEmailForAuth(email: string) {
  const pessoa = await this.pessoaRepo.findByEmail(email);
  if (!pessoa) throw new NotFoundException('Pessoa não encontrada');
  return pessoa; // inclui senha
}

  // ...update, remove, list etc seguindo mesmas regras
}
