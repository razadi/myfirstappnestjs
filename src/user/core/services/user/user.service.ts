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

  async save(user: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    newUser.id = uuidv4();
    newUser.name = user.name;
    newUser.pass = user.pass;
    newUser.mail = user.mail;

    this.users.push(newUser);
    return newUser;
  }

  async edit(id: string, user: CreateUserDto): Promise<UserEntity> {
    let editUser: UserEntity = null;

    this.users.forEach(usurFind => {
      if (usurFind.id === id) {
        usurFind.name = user.name;
        usurFind.pass = user.pass;
        usurFind.mail = user.mail;
        editUser = usurFind;
      }
    });
    return editUser;
  }

  async delete(id: string): Promise<boolean> {
    let pos = 0;
    let res = false;
    this.users.forEach((item, index) => {
      if( item.id === id) {
        pos = index;
        res = true;
      }
    });
    this.users.splice(pos, 1);
    return res;
  }
  
}
