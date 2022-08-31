import { Test, TestingModule } from '@nestjs/testing';
import { SerieService } from './serie.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SerieEntity } from './serie.entity';

describe('SerieService', () => {
  let serieService: SerieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SerieService,
        {
          provide: getRepositoryToken(SerieEntity),
          useValue: {},
        },
      ],
    }).compile();

    serieService = module.get<SerieService>(SerieService);
  });

  it('should be defined', () => {
    expect(serieService).toBeDefined();
  });
});
