import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/shared/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find({ relations: ['friends', 'groups'] });
  }

  findOne(id: string) {
    return this.usersRepository.findOne({
      where: { id: id },
      relations: ['friends', 'groups'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }

  addFriend(id: string, friendId: string) {}

  removeFriend(id: string, friendId: string) {}
}
