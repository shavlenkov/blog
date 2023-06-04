import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async findOne(email: string): Promise<User | undefined> {
        return this.usersRepository.findOneBy({email: email})
    }

    async create(email: string, name: string, password: string): Promise<User> {
        const user = this.usersRepository.create({
            email: email,
            name: name,
            password: password,
        });

        return this.usersRepository.save(user);
    }

    async updatePassword(email: string, password: string) {
        let user = await this.findOne(email);

        user.password = password;

        await this.usersRepository.save(user);

        return true;

    }

}