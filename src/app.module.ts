import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './modules/pessoa/pessoa.module';
import { AuthModule } from './modules/auth/auth.module';
import { FornecedorModule } from './modules/fornecedor/fornecedor.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { CompraModule } from './modules/compra/compra.module';
import { ConferenciaModule } from './modules/conferencia/conferencia.module';
import { AjusteEstoqueModule } from './modules/ajusteEstoque/ajusteEstoque.module';
import { SaidaEstoqueModule } from './modules/saidaEstoque/saida-estoque.module';

@Module({
  imports: [PessoasModule, AuthModule, FornecedorModule, ProdutoModule, CompraModule, ConferenciaModule, AjusteEstoqueModule, SaidaEstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
