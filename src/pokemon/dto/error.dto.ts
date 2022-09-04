import { ApiProperty } from '@nestjs/swagger';

export class ErrorDTO {
  @ApiProperty({
    description: 'Campo responsável por armazenar o status code do erro',
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Campo responsável por armazenar a mensagem do erro',
    example:
      'Iternal server error',
  })
  message: string;
}
