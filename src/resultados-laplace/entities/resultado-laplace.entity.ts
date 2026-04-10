import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Senal } from '../../senales/entities/senal.entity';

@ObjectType()
@Entity('resultados_laplace')
export class ResultadoLaplace {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Senal)
  @ManyToOne(() => Senal, (senal) => senal.resultados)
  @JoinColumn({ name: 'senal_id' })
  senal: Senal;

  @Field(() => Float)
  @Column({ type: 'float' })
  valor_z: number;

  @Field(() => Float)
  @Column({ type: 'float' })
  resultado: number;

  @Field()
  @Column({ type: 'date' })
  fecha_calculo: Date;
}