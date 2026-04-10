import { Module } from '@nestjs/common';
import { MuestrasResolver } from './muestras.resolver';
import { MuestrasService } from './muestras.service';

@Module({
  providers: [MuestrasResolver, MuestrasService]
})
export class MuestrasModule {}
