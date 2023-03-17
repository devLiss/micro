import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/shared/entities/user.entity';
import { Group } from '@app/shared/entities/group.entity';
import { DbModule } from '@app/shared/modules/db.module';
@Module({
  imports: [TypeOrmModule.forFeature([User, Group]), DbModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
