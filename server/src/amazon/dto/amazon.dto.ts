import { IsNotEmpty, IsString } from 'class-validator'

export class AmazonDto {
    @IsString()
    @IsNotEmpty()
    url: string;
}
