import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example:
      'Queijo Mussarela fino do fino, massa fina e borda recheada de catupiry',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 16.48,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;
}
