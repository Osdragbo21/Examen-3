import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SenalesService } from './senales.service';
import { Senal } from './entities/senal.entity'; // Importación corregida
import { CreateSenaleInput } from './dto/create-senale.input';
import { UpdateSenaleInput } from './dto/update-senale.input';

@Resolver(() => Senal) // Referencia corregida
export class SenalesResolver {
  constructor(private readonly senalesService: SenalesService) {}

  @Mutation(() => Senal) // Referencia corregida
  createSenale(@Args('createSenaleInput') createSenaleInput: CreateSenaleInput) {
    return this.senalesService.create(createSenaleInput);
  }

  @Query(() => [Senal], { name: 'senales' }) // Referencia corregida
  findAll() {
    return this.senalesService.findAll();
  }

  @Query(() => Senal, { name: 'senal' }) // Referencia corregida
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.senalesService.findOne(id);
  }

  @Mutation(() => Senal) // Referencia corregida
  updateSenale(@Args('updateSenaleInput') updateSenaleInput: UpdateSenaleInput) {
    return this.senalesService.update(updateSenaleInput.id, updateSenaleInput);
  }

  @Mutation(() => Senal) // Referencia corregida
  removeSenale(@Args('id', { type: () => Int }) id: number) {
    return this.senalesService.remove(id);
  }
}