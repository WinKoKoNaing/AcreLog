import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateFarmerDto {
  @ApiProperty({ example: 'Mg Mg', description: 'The name of the farmer' })
  @IsString()
  name: string;

  @ApiProperty({
    example: '123-456-7890',
    description: 'The phone number of the farmer',
    required: false,
  })
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
