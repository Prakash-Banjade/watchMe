import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { brightDataAxiosOptions } from 'src/config/brightData.config';
import * as cheerio from 'cheerio'


@Injectable()
export class SharemarketService {

  async scrapeAll() {

    const response = await axios.get(`https://merolagani.com/LatestMarket.aspx`, brightDataAxiosOptions);

    const $ = cheerio.load(response.data);

    const stocks = $('#ctl00_ContentPlaceHolder1_LiveTrading > table tbody tr').map((index, element) => {
      const columns = $(element).find('td');
      return {
        symbol: $(columns[0]).find('a').text().trim(),
        url: `https://merolagani.com/${$(columns[0]).find('a').attr('href')}`,
        title: $(columns[0]).find('a').attr('title'),
        LTP: +$(columns[1]).text().trim().replace(/,/g, ""),
        percentChange: +$(columns[2]).text().trim(),
        open: +$(columns[3]).text().trim().replace(/,/g, ""),
        high: +$(columns[4]).text().trim().replace(/,/g, ""),
        low: +$(columns[5]).text().trim().replace(/,/g, ""),
        quantity: +$(columns[6]).text().trim().replace(/,/g, ""),
        pClose: $(columns[7]).text().trim(),
        diff: $(columns[8]).text().trim()
      };
    }).get();

    return stocks
  }
}
