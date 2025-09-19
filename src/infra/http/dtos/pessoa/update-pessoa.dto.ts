import { Cargo } from '@prisma/client';
import { IsString, IsEmail, MinLength, IsEnum, IsBoolean } from 'class-validator';

export class UpdatePessoaDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsBoolean()
    ativo: boolean;

    @IsEnum(Cargo)
    cargo: Cargo;
}
