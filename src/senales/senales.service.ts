import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Senal } from './entities/senal.entity';

@Injectable()
export class SenalesService {
  constructor(
    @InjectRepository(Senal)
    private readonly senalesRepository: Repository<Senal>,
  ) {}

  create(createSenalInput: any) {
    // Usamos 'any' temporalmente en el input para evitar errores con los DTOs generados
    const nuevaSenal = this.senalesRepository.create(createSenalInput);
    return this.senalesRepository.save(nuevaSenal);
  }

  findAll() {
    // ¡Ojo aquí! Esto resuelve los puntos 1 y 5 de tu examen:
    // 1. Listar todas las señales disponibles.
    // 5. Relacionar señales con muestras.
    return this.senalesRepository.find({
      relations: ['muestras', 'resultados'], // Trae los datos relacionados automáticamente
    });
  }

  async findOne(id: number) {
    const senal = await this.senalesRepository.findOne({
      where: { id },
      relations: ['muestras', 'resultados'],
    });
    
    if (!senal) {
      throw new NotFoundException(`La señal con ID ${id} no fue encontrada`);
    }
    return senal;
  }

  update(id: number, updateSenalInput: any) {
    return `This action updates a #${id} senal`;
  }

  remove(id: number) {
    return `This action removes a #${id} senal`;
  }
}