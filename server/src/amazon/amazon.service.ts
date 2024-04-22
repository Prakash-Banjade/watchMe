import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio'
import { brightDataAxiosOptions } from 'src/config/brightData.config';


@Injectable()
export class AmazonService {

  findAll() {
    return `This action returns all amazon`;
  }

  async findOne(url: string) {
    try {
      const response = await axios.get(url, brightDataAxiosOptions)

      const $ = cheerio.load(response.data)

      const title = $('#productTitle').text().trim()
      const price = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole').text().trim()
      const usdPrice = $('#corePrice_desktop > div > table > tbody > tr > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)').text().trim()
      const rating = $('#acrPopover > span.a-declarative > a > span').text().trim()
      const ratingNumber = $('#averageCustomerReviews > span:nth-child(3)').text().trim()
      const priceSmbol = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-symbol').text().trim();
      const discount = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage').text().trim();
      const image = $('#landingImage').attr('src')
      const descriptionArray = [];
      const outOfStock = $('#availability > span').text().trim().toLowerCase() === 'out of stock'

      $('#feature-bullets > ul > li > span').each((index, element) => {
        const description = $(element).text().trim();
        descriptionArray.push(description);
      });

      return {
        title,
        price: +(price || usdPrice).replace(/[^\d.]/g, ''),
        priceSmbol: priceSmbol || '$',
        rating,
        ratingNumber,
        discount,
        image,
        descriptionArray,
        outOfStock,
        url,
      }

    } catch (e) {
      console.log(e)
    }
  }
}
