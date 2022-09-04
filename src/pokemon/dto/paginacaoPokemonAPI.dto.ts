export class IPaginacaoPokemonAPI {
  count: number;
  next: string;
  previous: string;
  results: Array<PaginacaoObjetoPokemonAPIDTO>;
}

export class PaginacaoObjetoPokemonAPIDTO {
  name: string;
  url: string;
}
