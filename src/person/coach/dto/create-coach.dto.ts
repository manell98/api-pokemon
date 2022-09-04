import { Person } from '../../person';
import { CreateAddressDto } from '../../../address/dto/create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoachDto extends Person {
  @ApiProperty({
    description:
      'Campo responsável por armazenar o enderço, para um possível assalto.',
    type: CreateAddressDto,
    isArray: true,
  })
  endereco: Array<CreateAddressDto>;

  @ApiProperty({
    description: 'Campo responsável por armazenar o nível de experiêcia.',
    example: 100,
  })
  nivelExperiencia: number;
}
