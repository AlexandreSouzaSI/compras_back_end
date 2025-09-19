import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaidaEstoqueService } from '../../services/saida-estoque.service';
import { CreateSaidaEstoqueDto } from '../dtos/saidaEstoque/create-saida-estoque.dto';
import { UpdateSaidaEstoqueDto } from '../dtos/saidaEstoque/update-saida-estoque.dto';

@Controller('saidas-estoque')
export class SaidaEstoqueController {
  constructor(private readonly service: SaidaEstoqueService) { }

  @Post()
  create(@Body() dto: CreateSaidaEstoqueDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSaidaEstoqueDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
