import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    user_name: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    first_name: string;

    @Column({ type: 'varchar' })
    last_name: string;

    @Column({ type: 'int', default: 1 })
    status: number;

    @ManyToOne(type => Role, role => role.id)
    role: number;

    @Column({ type: 'int', default: '0' })
    logged_in: number;
}
