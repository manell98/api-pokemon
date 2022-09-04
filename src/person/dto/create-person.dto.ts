import { CreateAddressDto } from '../address/dto/create-address.dto';

export class CreatePersonDto {
  nome: string;
  email: string;
  telefone: string;
  idade: number;
  endereco: Array<CreateAddressDto>;
}
