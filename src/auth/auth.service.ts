import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, pass: string) {

        const user = await this.usersService.findOne(email);

        const { password, ...result } = user;
        const payload = { email: result.email, sub: result.id };

        if(await bcrypt.compare(pass, user.password)) {
            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {
            throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN);
        }

    }

    async signUp(email: string, name: string, pass: string) {

        const hashedPassword = await bcrypt.hash(pass, 10);

        const newUser = await this.usersService.create(email, name, hashedPassword);

        const payload = { email: newUser.email, name: newUser.name, sub: newUser.id };

        return {
            access_token: this.jwtService.sign(payload),
        };

    }

}