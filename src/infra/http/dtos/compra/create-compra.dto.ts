import { IsInt, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CompraProdutoDto {
  @IsInt()
  produtoId: number;

  @IsInt()
  quantidade: number;

  @IsInt()
  precoUnitario: number;
}

export class CreateCompraDto {
  @IsInt()
  @IsNotEmpty()
  pessoaId: number;

  @IsInt()
  @IsNotEmpty()
  fornecedorId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompraProdutoDto)
  produtos: CompraProdutoDto[];
}
