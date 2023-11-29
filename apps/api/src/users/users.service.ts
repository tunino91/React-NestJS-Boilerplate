import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Tuna' },
    { id: 2, name: 'Peace' },
  ];

  findAll(name?: string) {
    if (name) {
      const u = this.users.find((u) => u.name === name);
      console.log('found user: ', u);
      return u;
    }
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user: User) => user.id === userId);
  }

  findByName(name: string) {
    const u = this.users.find((u) => u.name === name);
    console.log('@findByName found user: ', u);
    return u;
  }

  createUser(body: CreateUserDto) {
    console.log('the body: ', body);
    const newUser = { id: Date.now(), ...body };
    console.log('newUser: ', newUser);
    this.users.push(newUser);
    const nowUsers = this.users;
    return nowUsers;
  }
}
