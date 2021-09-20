/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            name: 'Administrator',
            email: 'admin@wf.com',
            username: 'admin',
            password: 'admin',
            roles: ['admin', 'superadmin']
        },
        {
            name: 'Johny Bravo',
            email: 'john@wf.com',
            username: 'john',
            password: 'john',
            roles: ['normaluser']
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}

export class User {
    name;
    email;

    @ApiProperty()
    username:string;

    @ApiProperty()
    password:string;
    roles;
}