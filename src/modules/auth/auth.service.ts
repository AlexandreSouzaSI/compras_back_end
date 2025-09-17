import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PessoaService } from '../pessoa/pessoa.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dts';

@Injectable()
export class AuthService {
  constructor(
    private readonly pessoaService: PessoaService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePessoa(email: string, senha: string) {
    const pessoa = await this.pessoaService.findByEmailForAuth(email);
    if (!pessoa) throw new UnauthorizedException('Email ou senha inválidos');

    const isPasswordMatching = await bcrypt.compare(senha, pessoa.senha);
    if (!isPasswordMatching)
      throw new UnauthorizedException('Email ou senha inválidos');

    return pessoa;
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const pessoa = await this.validatePessoa(dto.email, dto.senha);

    if (!pessoa.email) {
    throw new Error('Pessoa não possui email cadastrado');
  }

    const payload = { sub: pessoa.id, email: pessoa.email, cargo: pessoa.cargo };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      nome: pessoa.nome,
      email: pessoa.email,
      cargo: pessoa.cargo,
    };
  }
}
