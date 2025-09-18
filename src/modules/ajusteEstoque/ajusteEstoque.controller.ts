import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AjusteEstoqueService } from './ajusteEstoque.service';
import { CreateAjusteEstoqueDto } from './dto/create-ajusteEstoque.dto';
import { UpdateAjusteEstoqueDto } from './dto/update-ajusteEstoque.dto';

@Controller('ajustes-estoque')
export class AjusteEstoqueController {
  constructor(private readonly service: AjusteEstoqueService) {}

  @Post()
  create(@Body() dto: CreateAjusteEstoqueDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateAjusteEstoqueDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
