import { Controller, Get, Query } from '@nestjs/common';
import { AmazonService } from './amazon.service';

@Controller('products')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Get()
  findProduct(@Query('url') url: string) {
    return this.amazonService.findProduct(url)
  }
}
