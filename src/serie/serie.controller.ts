import { Body, Controller, Post } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieEntity } from './serie.entity';
import { ISerieInterface } from './interfaces/serie.interface';

@Controller('api/v1/serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  async save(@Body() serie: ISerieInterface): Promise<SerieEntity> {
    return this.serieService.save(serie);
  }
}
