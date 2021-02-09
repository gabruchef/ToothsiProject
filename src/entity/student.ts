import {Column, Entity, ManyToMany,JoinTable, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { attendance } from "./attendance";
import subjects from "./subjects";
@Entity()
export class student {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @ManyToMany(type => subjects) @JoinTable() 
    subjects: subjects[];
    @OneToMany(()=>attendance, attendance => attendance.student)
    attendance: attendance[];
}
export default student;