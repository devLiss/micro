import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
export class GroupEntity {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  @Field(() => [UserEntity])
  users: UserEntity[];
}
