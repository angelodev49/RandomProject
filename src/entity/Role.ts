import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User"
@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    role: string;

    @Column({ type: 'varchar' })
    description: string;

    @OneToMany(type => User, user => user.role)
    users: User[];
}
