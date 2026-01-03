import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateAcreRecordDto {
  @ApiProperty()
  @IsUUID()
  farmerId: string;

  @ApiProperty()
  @IsUUID()
  tractorId: string;

  @ApiProperty()
  @IsUUID()
  workTypeId: string;

  @ApiProperty({ example: '2025-01-01' })
  @IsDateString()
  date: string;

  @ApiProperty({ example: 2.5 })
  @IsNumber()
  acres: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  ratePerAcre?: number;
}
