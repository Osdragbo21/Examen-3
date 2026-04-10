import { Test, TestingModule } from '@nestjs/testing';
import { SenalesResolver } from './senales.resolver';
import { SenalesService } from './senales.service';

describe('SenalesResolver', () => {
  let resolver: SenalesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SenalesResolver, SenalesService],
    }).compile();

    resolver = module.get<SenalesResolver>(SenalesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
