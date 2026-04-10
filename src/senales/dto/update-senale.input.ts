import { CreateSenaleInput } from './create-senale.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSenaleInput extends PartialType(CreateSenaleInput) {
  @Field(() => Int)
  id: number;
}
