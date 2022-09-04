import { HabilidadesDTO } from './habilidades.dto';

export class CreatePokemonDto {
  nome: string;
  habilidades: Array<HabilidadesDTO>;
  nivelExperiencia: number;
}
