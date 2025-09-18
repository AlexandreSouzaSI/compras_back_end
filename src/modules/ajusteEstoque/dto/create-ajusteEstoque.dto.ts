// create-ajuste-estoque.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAjusteEstoqueDto {
  @IsInt()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  motivo: string;

  @IsInt()
  produtoId: number;
}
