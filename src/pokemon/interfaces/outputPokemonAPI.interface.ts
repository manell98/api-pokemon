import { IHabilidades } from './habilidades.interface';

export interface IOutputPokemonAPI {
  abilities: Array<IHabilidades>;
  base_experience: number;
}
