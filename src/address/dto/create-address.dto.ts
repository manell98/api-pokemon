import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({
    description: 'Campo responsável por receber o cep',
    example: '12345678',
  })
  cep: string;

  @ApiProperty({
    description: 'Campo responsável por receber o logradouro',
    example: 'Rua B',
  })
  logradouro: string;

  @ApiProperty({
    description: 'Campo responsável por receber o o complemento',
    example: 'Perto da esquina logo ali',
  })
  complemento: string;

  @ApiProperty({
    description: 'Campo responsável por receber o nome da bairro',
    example: 'Bairro dos Bairros',
  })
  bairro: string;

  @ApiProperty({
    description: 'Campo responsável por receber o nome da cidade',
    example: 'São Paulo',
  })
  cidade: string;

  @ApiProperty({
    description: 'Campo responsável por receber a uf',
    example: 'DF',
  })
  uf: string;
}
