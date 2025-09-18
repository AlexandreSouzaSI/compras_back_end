// update-ajuste-estoque.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateAjusteEstoqueDto } from './create-ajusteEstoque.dto';

export class UpdateAjusteEstoqueDto extends PartialType(CreateAjusteEstoqueDto) {}
