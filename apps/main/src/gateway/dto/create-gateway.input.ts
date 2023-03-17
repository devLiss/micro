import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGatewayInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
