import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller()
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @MessagePattern('createGroup')
  create(@Payload() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @MessagePattern('findAllGroups')
  findAll() {
    return this.groupsService.findAll();
  }

  @MessagePattern('findOneGroup')
  findOne(@Payload() id: number) {
    return this.groupsService.findOne(id);
  }

  @MessagePattern('updateGroup')
  update(@Payload() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(updateGroupDto.id, updateGroupDto);
  }

  @MessagePattern('removeGroup')
  remove(@Payload() id: number) {
    return this.groupsService.remove(id);
  }
}
