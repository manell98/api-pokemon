export interface IPaginacaoPokemonAPI {
  count: number;
  next: string;
  previous: string;
  results: Array<IPaginacaoObjetoPokemonAPI>;
}

export interface IPaginacaoObjetoPokemonAPI {
  name: string;
  url: string;
}
