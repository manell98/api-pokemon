import { Test, TestingModule } from '@nestjs/testing';
import { SerieService } from './serie.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SerieEntity } from './serie.entity';
import { Repository } from 'typeorm';

describe('SerieService', () => {
  let serieService: SerieService;
  let serieRepository: Repository<SerieEntity>;

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
    serieRepository = module.get<Repository<SerieEntity>>(
      getRepositoryToken(SerieEntity),
    );
  });

  it('should be defined', () => {
    expect(serieService).toBeDefined();
    expect(serieRepository).toBeDefined();
  });
});
