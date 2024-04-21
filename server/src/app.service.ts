import { Injectable } from '@nestjs/common';
import { Scrape } from './service/amazon.scraper';
import puppeteer, { Browser } from 'puppeteer-core'

@Injectable()
export class AppService {

  get(url: string) {
    const scrape = new Scrape(url);
    return scrape.scrape();
  }

}
