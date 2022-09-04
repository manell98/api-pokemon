import { CreateAddressDto } from '../../address/dto/create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    description: 'Campo responsável por receber o nome da empresa',
    example: 'Amazom',
  })
  name: string;

  @ApiProperty({
    description: 'Campo responsável por receber o nome da empresa',
    type: CreateAddressDto,
    isArray: true,
  })
  adress: Array<CreateAddressDto>;
}
