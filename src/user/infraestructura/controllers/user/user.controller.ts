import { User } from './../../../core/interfaces/user.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../../../core/services/user/user.service';
import { CreateUserDto } from '../../../core/dto/create.user.dto';
import { UserEntity } from '../../../core/entities/user.entity';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService
  ) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getContact(@Param('id') id): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.userService.save(user);
  }

  @Put(':id')
  async editContact(
    @Param('id') id,
    @Body() user: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.edit(id, user);
  }

  @Delete(':id')
  async deleteContact(@Param('id') id): Promise<boolean> {
    return this.userService.delete(id);
  }

}
