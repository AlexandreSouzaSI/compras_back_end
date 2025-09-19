import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FornecedorModule } from './infra/http/controllers/fornecedor.module';
import { CompraModule } from './infra/http/controllers/compra.module';
import { AjusteEstoqueModule } from './infra/http/controllers/ajusteEstoque.module';
import { ConferenciaModule } from './infra/http/controllers/conferencia.module';
import { PessoasModule } from './infra/http/controllers/pessoa.module';
import { ProdutoModule } from './infra/http/controllers/produto.module';
import { SaidaEstoqueModule } from './infra/http/controllers/saida-estoque.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PessoasModule, AuthModule, FornecedorModule, ProdutoModule, CompraModule, ConferenciaModule, AjusteEstoqueModule, SaidaEstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { } 
