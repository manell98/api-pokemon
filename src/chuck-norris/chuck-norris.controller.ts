import { Body, Controller, Get, Post, Headers, Put } from '@nestjs/common';
import { ChuckNorrisService } from './chuck-norris.service';
import { ChuckNorrisEntity } from './chuck-norris.entity';
import { IApiChuckNorris } from './interfaces/ApiChuckNorris.interface';
import { IUpdateChuckNorris } from './interfaces/UpdateChuckNorris.interface';

@Controller('/chuck-norris')
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @Get()
  async apiChuckNorris(): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.apiChuckNorris();
  }

  @Post()
  async save(
    @Body() inputChuckNorris: IApiChuckNorris,
  ): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.saveDataInEntityChuckNorris(
      inputChuckNorris,
    );
  }

  @Post('/find-and-save')
  async findAndSave(): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.findAndSave();
  }

  @Get('/find-all')
  async findAll(): Promise<Array<ChuckNorrisEntity>> {
    return this.chuckNorrisService.findAll();
  }

  @Get('/find-one')
  async findById(
    @Headers('id-chuck-norris') idChuckNorris: string,
  ): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.findById(idChuckNorris);
  }

  @Put()
  async update(
    @Body() bodyChuckNorris: IUpdateChuckNorris,
  ): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.update(bodyChuckNorris);
  }
}
