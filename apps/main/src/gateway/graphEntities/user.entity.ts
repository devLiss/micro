import { Field, ObjectType } from '@nestjs/graphql';
import { Group } from '@app/shared/entities/group.entity';
import { User } from '@app/shared/entities/user.entity';
import { GroupEntity } from './group.entity';

@ObjectType()
export class UserEntity {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  lastName: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => [GroupEntity])
  groups: GroupEntity[];

  @Field(() => [UserEntity])
  friends: UserEntity[];
}
