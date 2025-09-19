// create-fornecedor.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateFornecedorDto {
  @IsString()
  nome: string;

  @IsString()
  empresa: string;

  @IsOptional()
  @IsString()
  cnpj?: string;
}
