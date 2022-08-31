import { Test, TestingModule } from '@nestjs/testing';
import { SerieService } from './serie.service';

describe('SerieService', () => {
  let service: SerieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerieService],
    }).compile();

    service = module.get<SerieService>(SerieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
