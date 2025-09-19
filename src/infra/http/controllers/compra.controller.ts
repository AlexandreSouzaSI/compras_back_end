import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateCompraDto } from '../dtos/compra/create-compra.dto';
import { UpdateCompraDto } from '../dtos/compra/update-compra.dto';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { CompraService } from '../../services/compra.service';

@Controller('compras')
@UseGuards(JwtAuthGuard)
export class CompraController {
  constructor(private readonly compraService: CompraService) { }

  @Post()
  async create(@Req() req, @Body() dto: CreateCompraDto) {
    return this.compraService.createCompra.execute(req.user.cargo, dto);
  }

  @Get()
  async findAll(@Req() req) {
    return this.compraService.findAllCompra.execute(req.user.cargo);
  }

  @Get('search/filter')
  async findByNomeOuValor(
    @Req() req,
    @Query('nome') nome?: string,
    @Query('valor') valor?: number,
  ) {
    return this.compraService.findByNomeOuValorCompra.execute(req.user.cargo, nome, valor);
  }

  @Get(':id')
  async findById(@Req() req, @Param('id') id: string) {
    return this.compraService.findByIdCompra.execute(req.user.cargo, +id);
  }

  @Put(':id')
  async update(@Req() req, @Param('id') id: string, @Body() dto: UpdateCompraDto) {
    return this.compraService.updateCompra.execute(req.user.cargo, +id, dto);
  }

  @Delete(':id')
  async delete(@Req() req, @Param('id') id: string) {
    return this.compraService.deleteCompra.execute(req.user.cargo, +id);
  }
}
