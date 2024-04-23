import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as cheerio from 'cheerio'
import { brightDataAxiosOptions } from 'src/config/brightData.config';
import { AmazonProduct } from './entities/amazon.entity';
import { Repository } from 'typeorm';
import { AmazonProductDto } from './dto/amazon.dto';


@Injectable()
export class AmazonService {
  constructor(
    @InjectRepository(AmazonProduct) private readonly productRepo: Repository<AmazonProduct>
  ) { }

  async findAll() {
    return await this.productRepo.find()
  }

  async findOne(id: string) {
    const existingProduct = await this.productRepo.findOneBy({ id })
    if (!existingProduct) throw new NotFoundException('Product not found')

    return existingProduct;
  }

  async findProduct(url: string) {
    if (!url) return this.findAll();

    if (!this.isValidAmazonDomain(url)) throw new BadRequestException('Please enter only amazon product url')

    const product = await this.productRepo.findOne({ where: { url } })

    if (product) return product

    const scrapedProduct = await this.scrape(url)

    const newProduct = await this.productRepo.save(scrapedProduct);

    return newProduct
  }

  async scrape(url: string): Promise<AmazonProductDto> {
    const response = await axios.get(url, brightDataAxiosOptions)

    const $ = cheerio.load(response.data)

    const title = $('#productTitle').text().trim()
    const price = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole').text().trim()
    const usdPrice = $('#corePrice_desktop > div > table > tbody > tr > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)').text().trim()
    const rating = $('#acrPopover > span.a-declarative > a > span').text().trim()
    const ratingNumber = $('#averageCustomerReviews > span:nth-child(3)').text().trim()
    const priceSmbol = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-symbol').text().trim();
    const discount = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center.aok-relative > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage').text().trim();
    const descriptionArray = [];
    const outOfStock = $('#availability > span').text().trim().toLowerCase() === 'out of stock'

    $('#feature-bullets > ul > li > span').each((index, element) => {
      const description = $(element).text().trim();
      descriptionArray.push(description);
    });

    const images = $('#landingImage').attr('data-a-dynamic-image')

    return {
      title,
      price: +(price || usdPrice).replace(/[^\d.]/g, ''),
      priceSymbol: priceSmbol || '$',
      rating: +rating,
      ratingNumber: +ratingNumber.replace(/\D/g, ''),
      discount,
      images: Object.keys(JSON.parse(images)),
      descriptionArray,
      outOfStock,
      url,
    }
  }

  isValidAmazonDomain(url: string) {
    // Regular expression pattern for Amazon domains
    const amazonDomainPattern = /^(https?:\/\/)?(www\.)?amazon\.(com|ca|co\.uk|de|fr|it|es|com\.au|com\.mx|nl|com\.tr|ae|in|jp|sg|com\.br|com\.sa|com\.sg|com\.tw|cn|com\.hk)(\/.*)?$/;

    // Test the URL against the pattern
    return amazonDomainPattern.test(url);
  }
}
