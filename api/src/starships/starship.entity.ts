import { CreateDateColumn, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Starship {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name:string;

    @CreateDateColumn()
    created: Date;
}
