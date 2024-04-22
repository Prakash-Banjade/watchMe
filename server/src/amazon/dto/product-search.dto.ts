import { IsNotEmpty, IsString } from "class-validator";

export class ProductSearchDto {
    @IsString()
    @IsNotEmpty()
    url: string;
}