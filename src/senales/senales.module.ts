import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SenalesService } from './senales.service';
import { SenalesResolver } from './senales.resolver';
import { Senal } from './entities/senal.entity';

@Module({
  // Agregamos esta línea para conectar la entidad con el servicio
  imports: [TypeOrmModule.forFeature([Senal])], 
  providers: [SenalesResolver, SenalesService],
})
export class SenalesModule {}