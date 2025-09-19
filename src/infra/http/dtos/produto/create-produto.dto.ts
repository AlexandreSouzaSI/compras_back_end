// create-produto.dto.ts
import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNumber()
  preco: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoque?: number;

  @IsNumber()
  fornecedorId: number;
}
