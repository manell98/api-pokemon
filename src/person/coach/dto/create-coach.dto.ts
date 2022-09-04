import { CreatePersonDto } from '../../dto/create-person.dto';
import { CreatePokemonDto } from '../../../pokemon/dto/create-pokemon.dto';

export class CreateCoachDto extends CreatePersonDto {
  nivelExperiencia: string;
  pokemons: Array<CreatePokemonDto>;
}
