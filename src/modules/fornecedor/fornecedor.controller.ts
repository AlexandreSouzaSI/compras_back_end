// fornecedor.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Controller('fornecedores')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post()
  create(@Body() dto: CreateFornecedorDto) {
    return this.fornecedorService.create(dto);
  }

  @Get()
  findAll() {
    return this.fornecedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("id", id)
    return this.fornecedorService.findOne(+id);
  }

  @Get(':id/produtos')
    async getProdutos(@Param('id') id: string) {
    return this.fornecedorService.getProdutosByFornecedor(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFornecedorDto) {
    return this.fornecedorService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedorService.remove(+id);
  }
}
