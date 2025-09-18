import { IsInt, IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusConferencia } from '@prisma/client';

export class CreateConferenciaDto {
  @IsInt()
  pessoaId: number; // quem fez a conferência

  @IsInt()
  compraId: number; // qual compra está sendo conferida

  @IsEnum(StatusConferencia)
  status: StatusConferencia;

  @IsOptional()
  @IsString()
  observacao?: string;
}
