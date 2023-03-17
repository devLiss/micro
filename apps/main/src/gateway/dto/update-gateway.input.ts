import { CreateGatewayInput } from './create-gateway.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGatewayInput extends PartialType(CreateGatewayInput) {
  @Field(() => Int)
  id: number;
}
