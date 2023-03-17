import { GroupEntity } from './graphEntities/group.entity';
import { Resolver } from '@nestjs/graphql';

@Resolver(GroupEntity)
export class GroupsResolver {
  constructor() {}
}
