import { Test, TestingModule } from '@nestjs/testing';
import { ChuckNorrisService } from '../chuck-norris.service';

describe('ChuckNorrisService', () => {
  let service: ChuckNorrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChuckNorrisService],
    }).compile();

    service = module.get<ChuckNorrisService>(ChuckNorrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
