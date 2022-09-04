import {ApiProperty} from "@nestjs/swagger";

export class HabilidadesDTO {
  @ApiProperty({
    description: 'Campo responsável por raceber o nome e a url da habilidade do pokemon.',
    example: {
      name: 'static',
      url: 'https://pokeapi.co/api/v2/ability/9/'
    },
  })
  ability: {
    name: string;
    url: string;
  };

  @ApiProperty({
    description: 'Campo responsável por receber se o pokemon é hidden ou não na Base de dados',
    example: true,
  })
  is_hidden: boolean;

  @ApiProperty({
    description: 'Campo responsável por receber quanto de espaço o pokemon ocupa',
    example: 1,
  })
  slot: number;
}
