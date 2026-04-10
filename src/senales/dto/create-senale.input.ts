import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSenaleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
