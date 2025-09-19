import { Cargo } from '@prisma/client';
import { IsString, IsEmail, MinLength, IsEnum } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsEnum(Cargo)
  cargo: Cargo;
}
 