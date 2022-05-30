import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im5pbG94cCIsImlhdCI6MTY1Mzg4MzM4NywiZXhwIjoxNjUzOTY5Nzg3fQ.2O0BCUH5e6Qau5fYWv_vWfNjnWpNLnpHHz_1ZGBjZf4',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
