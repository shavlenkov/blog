import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import {User} from "../../users/entities/user.entity";


@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    descr: string;

    @Column()
    likes: number;

    @CreateDateColumn()
    created_at: Date;

    @JoinColumn()
    @ManyToOne(() => User, (user) => user.posts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true,
    })
    user: User



}