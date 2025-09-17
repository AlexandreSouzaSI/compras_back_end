import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './modules/pessoa/pessoa.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PessoasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
