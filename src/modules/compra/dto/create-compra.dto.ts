import { IsInt, IsArray, ValidateNested, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

class ProdutoCompraDto {
  @IsInt()
  produtoId: number;

  @IsInt()
  @IsPositive()
  quantidade: number;

  @IsPositive()
  precoUnitario: number;
}

export class CreateCompraDto {
  @IsInt()
  pessoaId: number; // comprador que está criando

  @IsInt()
  fornecedorId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProdutoCompraDto)
  produtos: ProdutoCompraDto[];
}
