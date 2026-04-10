import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Muestra } from '../../muestras/entities/muestra.entity';
import { ResultadoLaplace } from '../../resultados-laplace/entities/resultado-laplace.entity';

@ObjectType()
@Entity('senales')
export class Senal {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'text' })
  nombre: string;

  @Field(() => Float)
  @Column({ type: 'float' })
  amplitud: number;

  @Field(() => Float)
  @Column({ type: 'float' })
  decaimiento: number;

  @Field()
  @Column({ type: 'text' })
  tipo: string;

  @Field(() => [Muestra], { nullable: true })
  @OneToMany(() => Muestra, (muestra) => muestra.senal)
  muestras: Muestra[];

  @Field(() => [ResultadoLaplace], { nullable: true })
  @OneToMany(() => ResultadoLaplace, (resultado) => resultado.senal)
  resultados: ResultadoLaplace[];
}