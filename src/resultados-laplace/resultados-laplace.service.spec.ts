import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosLaplaceService } from './resultados-laplace.service';

describe('ResultadosLaplaceService', () => {
  let service: ResultadosLaplaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadosLaplaceService],
    }).compile();

    service = module.get<ResultadosLaplaceService>(ResultadosLaplaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
