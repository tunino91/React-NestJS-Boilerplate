"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Tuna' },
            { id: 2, name: 'Peace' },
        ];
    }
    findAll(name) {
        if (name) {
            const u = this.users.find((u) => u.name === name);
            console.log('found user: ', u);
            return u;
        }
        return this.users;
    }
    findById(userId) {
        return this.users.find((user) => user.id === userId);
    }
    findByName(name) {
        const u = this.users.find((u) => u.name === name);
        console.log('@findByName found user: ', u);
        return u;
    }
    createUser(body) {
        console.log('the body: ', body);
        const newUser = { id: Date.now(), ...body };
        console.log('newUser: ', newUser);
        this.users.push(newUser);
        const nowUsers = this.users;
        return nowUsers;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map