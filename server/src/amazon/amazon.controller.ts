import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AddUserEmailDto } from './dto/addUserEmail.dto';

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

  @Post('add_user')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  addUser(@Body() addUserEmailDto: AddUserEmailDto) {
    return this.amazonService.addUserEmailToProduct(addUserEmailDto)
  }

}
