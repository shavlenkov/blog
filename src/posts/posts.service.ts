import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {User} from "../users/entities/user.entity";


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,
    ) {}

    async create(title: string, descr: string) {

        const post =  this.postsRepository.create({
            title: title,
            descr: descr,
            likes: 0,
            user: 1
        });

        return this.postsRepository.save(post);
    }
}
