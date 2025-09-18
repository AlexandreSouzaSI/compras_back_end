// update-fornecedor.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateFornecedorDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;
}
