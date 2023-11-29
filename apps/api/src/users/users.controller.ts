import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query('name') name?: string): any {
    console.log('the name on controller: ', name);
    return this.usersService.findAll(name);
  }

  @Get('queryParams') // localhost:3000/api/users/queryParams?name=Tuna&age=21
  getUserByQueryParams(@Query('name') name: string): any {
    console.log('that name: ', name);
    return this.usersService.findByName(name);
  }

  @Get(':id') // localhost:3000/api/users/1
  getUserById(@Param('id', ParseIntPipe) id: number): any {
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User[] {
    return this.usersService.createUser(body);
  }
}
