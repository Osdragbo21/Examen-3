import { Test, TestingModule } from '@nestjs/testing';
import { SenalesService } from './senales.service';

describe('SenalesService', () => {
  let service: SenalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SenalesService],
    }).compile();

    service = module.get<SenalesService>(SenalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
