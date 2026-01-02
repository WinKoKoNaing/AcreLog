import { ApiProperty } from '@nestjs/swagger';

export class Farmer {
  id: string;

  @ApiProperty({ example: 'Kitty', description: 'The name of the farmer' })
  name: string;

  @ApiProperty({
    example: '123-456-7890',
    description: 'The phone number of the farmer',
  })
  phone: string;

  @ApiProperty({ example: 'Village', description: 'The village of the farmer' })
  village: string;

  @ApiProperty({
    example: 5,
    description: 'The total acres owned by the farmer',
  })
  totalAcres: number;

  @ApiProperty({ example: true, description: 'Whether the farmer is active' })
  isActive: boolean;
}
