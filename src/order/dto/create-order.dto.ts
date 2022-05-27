import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que esta criando o pedido',
    example: '1b20116f-e6fd-4d65-96bf-63c7d2a54d9e',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que esta realizando o pedido',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    example: '["27701091-c09a-4db2-bf8a-d58bc7f53132"]',
  })
  products: string[];
}
