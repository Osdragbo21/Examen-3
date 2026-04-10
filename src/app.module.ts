import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// Importación de los módulos que generamos por consola
import { SenalesModule } from './senales/senales.module';
import { MuestrasModule } from './muestras/muestras.module';
import { ResultadosLaplaceModule } from './resultados-laplace/resultados-laplace.module';

@Module({
  imports: [
    // Configuración de GraphQL (Code First)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    
    // Configuración de la Base de Datos (PostgreSQL)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Usuario de la captura de DBeaver
      password: '211021', // IMPORTANTE: Cambia esto por tu contraseña real
      database: 'examen_senales_laplace', // BD de la captura
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Auto-creará las tablas
    }),

    // Módulos de la aplicación
    SenalesModule,
    MuestrasModule,
    ResultadosLaplaceModule,
  ],
})
export class AppModule {}