import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    findAll(name?: string): User | User[];
    findById(userId: number): User;
    findByName(name: string): User;
    createUser(body: CreateUserDto): User[];
}
