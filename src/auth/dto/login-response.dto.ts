import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im5pbG94cCIsImlhdCI6MTY1NTA3NzQ2MSwiZXhwIjoxNjU1MTYzODYxfQ.FOC30ggQNYIcaVlXliz_lwwm0OTnX_LA5K8F41aKpGo',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
