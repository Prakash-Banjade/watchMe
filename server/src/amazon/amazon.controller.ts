import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AmazonDto } from './dto/amazon.dto';

@Controller('amazon')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  findOne(@Body() amazonDto: AmazonDto) {
    return this.amazonService.findOne(amazonDto.url)
  }
}
