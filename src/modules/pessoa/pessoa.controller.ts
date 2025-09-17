import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly service: PessoaService) {}

  @Post()
  async create(@Body() dto: CreatePessoaDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
