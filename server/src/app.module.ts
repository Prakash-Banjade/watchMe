import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { SharemarketModule } from './sharemarket/sharemarket.module';
import { AmazonModule } from './amazon/amazon.module';
import configuration from './config/env.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configService),
    SharemarketModule,
    AmazonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
