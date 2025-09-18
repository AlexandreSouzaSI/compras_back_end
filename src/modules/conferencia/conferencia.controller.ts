import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConferenciaService } from './conferencia.service';
import { CreateConferenciaDto } from './dto/create-conferencia.dto';
import { UpdateConferenciaDto } from './dto/update-conferencia.dto';

@Controller('conferencias')
export class ConferenciaController {
  constructor(private readonly conferenciaService: ConferenciaService) {}

  @Post()
  create(@Body() dto: CreateConferenciaDto) {
    return this.conferenciaService.create(dto);
  }

  @Get()
  findAll() {
    return this.conferenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conferenciaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateConferenciaDto) {
    return this.conferenciaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conferenciaService.remove(+id);
  }
}
