import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateSaidaEstoqueDto {
  @IsInt()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsInt()
  produtoId: number;
}
