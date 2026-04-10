import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Senal } from '../../senales/entities/senal.entity';

@ObjectType()
@Entity('muestras')
export class Muestra {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Senal)
  @ManyToOne(() => Senal, (senal) => senal.muestras)
  @JoinColumn({ name: 'senal_id' })
  senal: Senal;

  @Field(() => Int)
  @Column({ type: 'int' })
  n: number;

  @Field(() => Float)
  @Column({ type: 'float' })
  valor: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  timestamp: number;
}