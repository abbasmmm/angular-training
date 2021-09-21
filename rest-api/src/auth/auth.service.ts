/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        user = await this.usersService.findOne(user.username)
        const payload = { username: user.username, sub: user.name };
        return {
            token: this.jwtService.sign(payload),
            name: user.name,
            email: user.email,
            roles: user.roles,            
        };
    }
}