import { ApiProperty } from '@nestjs/swagger';

export class IndexErrorSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
