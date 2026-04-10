import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosLaplaceResolver } from './resultados-laplace.resolver';

describe('ResultadosLaplaceResolver', () => {
  let resolver: ResultadosLaplaceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadosLaplaceResolver],
    }).compile();

    resolver = module.get<ResultadosLaplaceResolver>(ResultadosLaplaceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
