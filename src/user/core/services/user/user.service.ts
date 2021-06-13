import { User } from './../../interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create.user.dto';
import { v4 as uuidv4 } from 'uuid';
import { log } from 'console';

@Injectable()
export class UserService {

  users: User[] = [];

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(id: string): Promise<User> {
    log(id);
    let user = this.users.find(item => {
      return item.id === id;
    });
    return user;
  }

  async save(data: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    newUser.id = uuidv4();
    newUser.name = data.name;
    newUser.pass = data.pass;
    newUser.mail = data.mail;

    this.users.push(newUser);
    return newUser;
  }
  
}
