import { Module } from '@nestjs/common';
import { SharemarketService } from './sharemarket.service';
import { SharemarketController } from './sharemarket.controller';

@Module({
  controllers: [SharemarketController],
  providers: [SharemarketService],
})
export class SharemarketModule {}
