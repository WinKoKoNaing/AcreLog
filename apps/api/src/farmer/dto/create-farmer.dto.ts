import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateFarmerDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  village?: string;

  @IsOptional()
  @IsNumber()
  totalAcres?: number;
}
