import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  create(@Body() dto: CreateCompraDto) {
    return this.compraService.create(dto);
  }

  @Get()
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCompraDto) {
    return this.compraService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
