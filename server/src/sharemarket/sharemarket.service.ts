import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { brightDataAxiosOptions } from 'src/config/brightData.config';
import * as cheerio from 'cheerio'


@Injectable()
export class SharemarketService {

  constructor(
    private readonly configService: ConfigService
  ) { }

  async scrapeAll() {

    const response = await axios.get(`https://merolagani.com/LatestMarket.aspx`, brightDataAxiosOptions);

    const $ = cheerio.load(response.data);

    const data = $('#ctl00_ContentPlaceHolder1_LiveTrading > table tbody tr').map((index, element) => {
      const columns = $(element).find('td');
      return {
        symbol: $(columns[0]).find('a').text().trim(),
        LTP: $(columns[1]).text().trim(),
        percentChange: $(columns[2]).text().trim(),
        open: $(columns[3]).text().trim(),
        high: $(columns[4]).text().trim(),
        low: $(columns[5]).text().trim(),
        quantity: $(columns[6]).text().trim(),
        pClose: $(columns[7]).text().trim(),
        diff: $(columns[8]).text().trim()
      };
    }).get();

    return data;
  }
}
