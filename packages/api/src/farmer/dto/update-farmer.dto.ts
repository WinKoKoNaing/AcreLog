import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmerDto } from 'entry';

export class UpdateFarmerDto extends PartialType(CreateFarmerDto) {}
