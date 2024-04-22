import { Module } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AmazonController } from './amazon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmazonProduct } from './entities/amazon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AmazonProduct,
    ])
  ],
  controllers: [AmazonController],
  providers: [AmazonService],
})
export class AmazonModule { }
