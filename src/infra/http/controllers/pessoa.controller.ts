import { Controller, Post, Body, Get, Param, ParseIntPipe, UseGuards, Req, Query, Put, Delete } from '@nestjs/common';
import { PessoaService } from '../../services/pessoa.service';
import { CreatePessoaDto } from '../dtos/pessoa/create-pessoa.dto';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { Cargo } from '@prisma/client';
import { UpdatePessoaDto } from '../dtos/pessoa/update-pessoa.dto';

@Controller('pessoas')
@UseGuards(JwtAuthGuard)
export class PessoaController {
  constructor(private readonly pessoaservice: PessoaService) { }

  @Post()
  async create(@Req() req, @Body() dto: CreatePessoaDto) {
    return this.pessoaservice.createPessoa.execute(req.user.cargo, dto);
  }

  @Get()
  async findAll(@Req() req) {
    return this.pessoaservice.findAllPessoa.execute(req.user.cargo);
  }

  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    return this.pessoaservice.findByEmailPessoa.execute(email);
  }

  @Get('search/filter')
  async findByNomeOuValor(
    @Req() req,
    @Query('nome') nome?: string,
  ) {
    return this.pessoaservice.findByNomeOuCargoPessoa.execute(req.user.cargo, nome);
  }

  @Get(':id')
  async findOne(@Req() req, @Param('id') id: string) {
    return this.pessoaservice.findByIdPessoa.execute(req.user.cargo, +id);
  }

  @Put(':id')
  async update(@Req() req, @Param('id') id: string, @Body() dto: UpdatePessoaDto) {
    return this.pessoaservice.updatePessoa.execute(req.user.cargo, +id, dto);
  }

  @Delete(':id')
  async delete(@Req() req, @Param('id') id: string) {
    return this.pessoaservice.deletePessoa.execute(req.user.cargo, +id);
  }
}
