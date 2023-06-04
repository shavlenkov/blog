import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Post} from "../../posts/entities/post.entity";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @OneToMany(() => Post, (posts) => posts.user)
    posts: Post[];


}