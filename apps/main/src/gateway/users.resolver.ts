import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './graphEntities/user.entity';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserInput } from './dto/createUser.input';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(@Inject('USER_SERVICE') private userQueue: ClientProxy) {}

  @Query(() => [UserEntity], { name: 'findAllUsers' })
  findAll() {
    console.log('query ');
    return this.userQueue.send({ cmd: 'findAllUsers' }, {});
  }

  @Mutation(() => UserEntity, { name: 'createUser' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    console.log('mutation');
    console.log('DTO => ', createUserInput);
    return this.userQueue.send({ cmd: 'createUser' }, { createUserInput });
  }
}
