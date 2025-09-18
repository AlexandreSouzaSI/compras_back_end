import { PartialType } from '@nestjs/mapped-types';
import { CreateSaidaEstoqueDto } from './create-saida-estoque.dto';

export class UpdateSaidaEstoqueDto extends PartialType(CreateSaidaEstoqueDto) {}
