import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from '@app/shared/entities/user.entity';
import { Group } from '@app/shared/entities/group.entity';
import { DbModule } from '@app/shared/modules/db.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Group]), DbModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
