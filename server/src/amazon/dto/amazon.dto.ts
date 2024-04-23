import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class AmazonProductDto {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    priceSymbol: string;

    @IsDecimal()
    @IsNotEmpty()
    rating: number;

    @IsNumber()
    @IsNotEmpty()
    ratingNumber: number;

    @IsString()
    @IsNotEmpty()
    discount: string;

    @IsString({ each: true })
    @IsNotEmpty()
    images: string[];

    @IsString({ each: true })
    @IsNotEmpty()
    descriptionArray: string[];

    @IsBoolean()
    @IsNotEmpty()
    outOfStock: boolean;
}
