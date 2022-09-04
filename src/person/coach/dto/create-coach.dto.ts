import { Person } from '../../person';
import { CreateAddressDto } from '../../../address/dto/create-address.dto';

export class CreateCoachDto extends Person {
  endereco: Array<CreateAddressDto>;
  nivelExperiencia: number;
}
