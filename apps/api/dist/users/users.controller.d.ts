import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(name?: string): any;
    getUserByQueryParams(name: string): any;
    getUserById(id: number): any;
    createUser(body: CreateUserDto): User[];
}
