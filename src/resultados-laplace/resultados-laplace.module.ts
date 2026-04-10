import { Module } from '@nestjs/common';
import { ResultadosLaplaceResolver } from './resultados-laplace.resolver';
import { ResultadosLaplaceService } from './resultados-laplace.service';

@Module({
  providers: [ResultadosLaplaceResolver, ResultadosLaplaceService]
})
export class ResultadosLaplaceModule {}
