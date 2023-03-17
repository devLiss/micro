import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Lastname' })
  lastName: string;
  @Field(() => String, { description: 'Email' })
  email: string;
}
