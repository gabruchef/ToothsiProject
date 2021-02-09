import {Column, Entity, ManyToOne,JoinTable, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { attendance } from "./attendance";
import student from "./student";
import { teacher } from "./teacher";
@Entity()
export class subjects {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @ManyToOne(()=>teacher,teacher=>teacher.subjects)
    public teacher:teacher;
    @OneToMany(()=> attendance, attendance => attendance.subject)
    public attendance: attendance[];
}
export default subjects;