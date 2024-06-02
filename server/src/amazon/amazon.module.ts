import { Module } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AmazonController } from './amazon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmazonProduct } from './entities/amazon.entity';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AmazonProduct,
    ]),
    MailModule,
  ],
  controllers: [AmazonController],
  providers: [AmazonService],
})
export class AmazonModule { }
