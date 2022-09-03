import { IHabilidadesInterface } from './habilidades.interface';

export interface IOutputPokemonAPI {
  abilities: Array<IHabilidadesInterface>;
  base_experience: number;
}
