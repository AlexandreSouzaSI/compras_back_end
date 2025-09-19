// update-produto.dto.ts
import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  preco?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estoque?: number;

  @IsOptional()
  @IsNumber()
  fornecedorId?: number;
}
