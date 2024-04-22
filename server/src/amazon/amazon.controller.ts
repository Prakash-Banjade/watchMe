import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AmazonProductDto } from './dto/amazon.dto';
import { ProductSearchDto } from './dto/product-search.dto';

@Controller('amazon')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Get()
  findAll() {
    return this.amazonService.findAll()
  }
  
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  findOne(@Body() productSearchDto: ProductSearchDto) {
    return this.amazonService.findOne(productSearchDto.url)
  }
}
