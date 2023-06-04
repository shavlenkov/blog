import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

import { SignInDto } from "./dto/signin.dto";
import { SignUpDto } from "./dto/signup.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signIn(@Body() signInDto: SignInDto) {

        let { email, password } = signInDto;

        return this.authService.signIn(email, password);
    }

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto) {

        let { email, name, password } = signUpDto;

        return this.authService.signUp(email, name, password);
    }

}