import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { Repository } from 'typeorm';
import { ChuckNorrisEntity } from './chuck-norris.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { environment } from '../config/environment';
import { IApiChuckNorris } from './interfaces/ApiChuckNorris.interface';
import { IUpdateChuckNorris } from './interfaces/UpdateChuckNorris.interface';
import { IndexApiChuckNorrisSwagger } from './swagger/index.api-chuck-norris';

@Injectable()
export class ChuckNorrisService {
  logger: Logger = new Logger(ChuckNorrisService.name);

  constructor(
    @InjectRepository(ChuckNorrisEntity)
    private readonly chuckNorrisRepository: Repository<ChuckNorrisEntity>,
  ) {}

  async apiChuckNorris(): Promise<ChuckNorrisEntity> {
    this.logger.debug('Consumindo a API do Chuck Norris...');

    try {
      const endpoint = 'https://api.chucknorris.io/jokes/random';

      const result = await axios.get(endpoint);

      return this.formatSaveChuckNorris(result.data);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "listAll".
        <'ERRO'>
          MESSAGE: Erro ao listar dados da API do chuck norris...
        Resposta:
        <'ERRO EXTERNO'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  formatSaveChuckNorris(
    dataChuckNorris: IndexApiChuckNorrisSwagger,
  ): ChuckNorrisEntity {
    this.logger.debug('Formatando os dados do Chuck Norris...');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return {
      categorias: dataChuckNorris.categories,
      iconeUrl: dataChuckNorris.icon_url,
      idApiChuckNorris: dataChuckNorris.id,
      url: dataChuckNorris.url,
      valor: dataChuckNorris.value,
    };
  }

  async saveDataInEntityChuckNorris(
    inputChuckNorris: IndexApiChuckNorrisSwagger,
  ): Promise<ChuckNorrisEntity> {
    this.logger.debug('Salvando dados na entidade ChuckNorris');

    try {
      return this.chuckNorrisRepository.save(
        this.chuckNorrisRepository.create(
          this.formatSaveChuckNorris(inputChuckNorris),
        ),
      );
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${
          environment.app.name
        }", método "saveDataInEntityChuckNorris".
        <'ERRO'>
          MESSAGE: Erro ao salvar dados na entidade do chuck norris...
        Parâmetros da requisição:
          BODY: ${JSON.stringify(inputChuckNorris)}
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAndSave(): Promise<ChuckNorrisEntity> {
    const chuckNorris = await this.apiChuckNorris();

    this.logger.debug(
      `Buscando e salvando dados da API do Chuck Norris de id: ${chuckNorris.idApiChuckNorris} naBase de Dados...`,
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const objChuckNorris: IApiChuckNorris = {
      categories: chuckNorris.categorias,
      icon_url: chuckNorris.iconeUrl,
      id: chuckNorris.idApiChuckNorris,
      url: chuckNorris.url,
      value: chuckNorris.valor,
    };

    return this.saveDataInEntityChuckNorris(objChuckNorris);
  }

  async findAll(): Promise<Array<ChuckNorrisEntity>> {
    this.logger.debug('Buscando todos os Chuck Norris.');

    try {
      return this.chuckNorrisRepository.find();
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findAll".
        <'ERRO'>
          MESSAGE: Erro ao buscar todos os Chuck Norris na base de dados...
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(idChuckNorris: string): Promise<ChuckNorrisEntity> {
    this.logger.debug(`Buscando Chuck Norris de ${idChuckNorris}.`);

    try {
      const chuckNorris = await this.chuckNorrisRepository.findOne({
        where: {
          id: idChuckNorris,
        },
      });

      if (chuckNorris) return chuckNorris;

      const erroMenssage = `Não foi encontrado nenhum Chuck Norris com id: ${idChuckNorris} na base de dados...`;

      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findById".
        <'ERRO'>
          MESSAGE: ${erroMenssage}
        Resposta:
        <'ERRO NEGOCIAL'>
          CODE: ${HttpStatus.NOT_FOUND}
          MESSAGE: ${erroMenssage}
      `);

      throw new HttpException(erroMenssage, HttpStatus.NOT_FOUND);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findById".
        <'ERRO'>
          MESSAGE: Erro ao buscar o Chuck Norris de id: ${idChuckNorris} na base de dados...
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async saveUpdatedChuckNorris(
    inputChuckNorris: IApiChuckNorris,
  ): Promise<ChuckNorrisEntity> {
    this.logger.debug('Salvando dados na entidade ChuckNorris');

    try {
      await this.chuckNorrisRepository.update(
        inputChuckNorris.id,
        inputChuckNorris,
      );

      return this.findById(inputChuckNorris.id);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "saveUpdatedChuckNorris".
        <'ERRO'>
          MESSAGE: Erro ao atualizar o chuck norris de id: ${
            inputChuckNorris.id
          } na base de dados...
        Parâmetros da requisição:
          BODY: ${JSON.stringify(inputChuckNorris)}
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    bodyChuckNorris: IUpdateChuckNorris,
  ): Promise<ChuckNorrisEntity> {
    this.logger.debug(`Atualizando Chuck Norris de ${bodyChuckNorris.id}.`);

    try {
      let chuckNorris = await this.chuckNorrisRepository.findOne({
        where: {
          id: bodyChuckNorris.id,
        },
      });

      if (chuckNorris) {
        chuckNorris = {
          ...chuckNorris,
          categorias: bodyChuckNorris.categories,
          iconeUrl: bodyChuckNorris.icon_url,
          url: bodyChuckNorris.url,
          valor: bodyChuckNorris.value,
          tsEdicao: new Date(),
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.saveUpdatedChuckNorris(chuckNorris);
      }

      const erroMenssage = `Não foi encontrado nenhum Chuck Norris com id: ${bodyChuckNorris.id} para atualizar na base de dados...`;

      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findById".
        <'ERRO'>
          MESSAGE: ${erroMenssage}
        Resposta:
        <'ERRO NEGOCIAL'>
          CODE: ${HttpStatus.NOT_FOUND}
          MESSAGE: ${erroMenssage}
      `);

      throw new HttpException(erroMenssage, HttpStatus.NOT_FOUND);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "update".
        <'ERRO'>
          MESSAGE: Erro ao buscar o Chuck Norris de id: ${
            bodyChuckNorris.id
          } na base de dados...
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async destroy(idChuckNorris: string): Promise<string> {
    this.logger.debug(
      `Removendo Chuck Norris de id: ${idChuckNorris} da base de dados...`,
    );

    try {
      const destroyedChuckNorris = await this.chuckNorrisRepository.delete(
        idChuckNorris,
      );

      console.log('DESTROY =>', destroyedChuckNorris);

      if (destroyedChuckNorris.affected >= 1) {
        return `Chuck Norris de id: ${idChuckNorris}, removido com secesso!!`;
      }

      const erroMenssage = `Não foi encontrado nenhum Chuck Norris com id: ${idChuckNorris} para remover na base de dados...`;

      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "destroy".
        <'ERRO'>
          MESSAGE: ${erroMenssage}
        Parâmetros da requisição:
          BODY: ${idChuckNorris}
        Resposta:
        <'ERRO NEGOCIAL'>
          CODE: ${HttpStatus.NOT_FOUND}
          MESSAGE: ${erroMenssage}
      `);

      throw new HttpException(erroMenssage, HttpStatus.NOT_FOUND);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "destroy".
        <'ERRO'>
          MESSAGE: Erro ao remover o Chuck Norris de id: ${idChuckNorris} na base de dados...
        Parâmetros da requisição:
          BODY: ${idChuckNorris}
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
