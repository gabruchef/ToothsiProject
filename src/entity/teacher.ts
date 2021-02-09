import {Column, Entity, OneToMany,JoinTable, PrimaryGeneratedColumn} from "typeorm";
import subjects from "./subjects";
@Entity()
export class teacher {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;
    @OneToMany(()=>subjects,subjects=>subjects.teacher)
    subjects: subjects[];
}
export default teacher;