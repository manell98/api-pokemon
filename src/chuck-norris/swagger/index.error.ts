import { ApiProperty } from '@nestjs/swagger';

export class IndexErrorSwagger {
  @ApiProperty({
    description: 'Campo responsável por armazenar o status code do erro',
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Campo responsável por armazenar a mensagem do erro',
    example:
      'Não foi encontrado nenhum Chuck Norris com id: 03ea0ecb-0679-4fc5-b669-79df6e748e4c para remover na base de dados...',
  })
  message: string;
}
