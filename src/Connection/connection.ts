import {createConnection} from "typeorm";
import subjects from "../entity/subjects";
import student from "../entity/student";
import teacher from "../entity/teacher";
import { attendance } from "../entity/attendance";
export const connection = createConnection({
     type: "mysql",     host: "localhost",  port: 3306, username: "root",password: "gabru.123", database: "test",
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
        student, // our SuperHero entity class
        subjects,      // our Power entity class
        teacher,
        attendance
    ],
    synchronize: true,
    logging: false
});