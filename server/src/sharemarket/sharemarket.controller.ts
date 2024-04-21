import { Controller, Get } from '@nestjs/common';
import { SharemarketService } from './sharemarket.service';

@Controller('shareMarket')
export class SharemarketController {
  constructor(private readonly sharemarketService: SharemarketService) { }

  @Get()
  scrape() {
    return this.sharemarketService.scrapeAll();
  }
}
