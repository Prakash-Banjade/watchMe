import { Controller, Get, Param, Query } from '@nestjs/common';
import { AmazonService } from './amazon.service';

@Controller('products')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Get()
  findProduct(@Query('url') url: string) {
    return this.amazonService.findProduct(url)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amazonService.findOne(id)
  }
}
