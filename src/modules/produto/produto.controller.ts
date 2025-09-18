// produto.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() dto: CreateProdutoDto) {
    return this.produtoService.create(dto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }
}
