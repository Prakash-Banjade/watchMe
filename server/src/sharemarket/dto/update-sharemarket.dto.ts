import { PartialType } from '@nestjs/mapped-types';
import { CreateSharemarketDto } from './create-sharemarket.dto';

export class UpdateSharemarketDto extends PartialType(CreateSharemarketDto) {}
