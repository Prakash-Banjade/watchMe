import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  get() {
    return this.appService.get('https://www.amazon.com/Predator-i9-13900HX-Display-PH16-71-94FB-Keyboard/dp/B0C45652MY/ref=sr_1_1?crid=3FI0PBIWOMG8R&dib=eyJ2IjoiMSJ9.Fz-xgq55QDdvTr_-is9QSHI5FdEY7Fwkm4_2sFypvVyx0wt8eNzx5r7Shba9t8XEvySXxNp3C54iXXit2jdUs-yMzP3MAXJ8NijvhxycuNJE13UdqD4KvRiR2FA3Fh0cA4r9nni0ZOzT6kyAT7x3NNlH7FGh1WC-9qRWzov680qBVeHdptEMIyfCK4uTBx9_kxVLGoFzTuIMuYZv0QyEmGcxZl0jetJf1EsRr7SFSAo.tkiXERx05NWy6XZO7u7LtEob06_ybjyeigS5WGexnGE&dib_tag=se&keywords=acer+predator+helios+16&qid=1713635483&sprefix=acer+predator+%2Caps%2C799&sr=8-1');
  }
}
