import {Body, Controller, Post, Get, Req, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "../auth/auth.guard";

import * as bcrypt from 'bcrypt';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('update')
    @UseGuards(AuthGuard)
    async update(@Req() req, @Body() a) {
        await this.usersService.updatePassword(req.user.email, await bcrypt.hash(a.password, 10));

        return 'ok'
    }
}
