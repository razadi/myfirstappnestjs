import { User } from './../../../core/interfaces/user.interface';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.save(createUserDto);
  }

}
