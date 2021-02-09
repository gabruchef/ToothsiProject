import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import student from "./student";
import subjects from "./subjects";

@Entity()
export class attendance {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> subjects, subjects => subjects.attendance)
    subject:subjects;

    @ManyToOne(() => student, student => student.attendance)
    student: student;

    @Column()
    age: number;

}