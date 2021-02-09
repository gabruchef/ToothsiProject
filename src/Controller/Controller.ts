import {Request, Response} from 'express';
import {connection} from "../Connection/connection";
import student from '../entity/student';
class Controller {    
    constructor() {}
    public getAllStudents(req: Request, res: Response) {
        connection
            .then(async connection => {
                const students: student[] = await connection.manager.find(student);
                res.json(students);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }    
    public addStudents(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestStudent = req.body;
                //let subs = [];          
                let stu = new student();
                stu.name = requestStudent.name;
                //stu.subjects = [];                              
                await connection.manager.save(stu);
                res.json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }    
    /*public updateSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => { 
                let requestSuperHero1 = req.body;              
                let superHero  = await connection.manager.findOne(SuperHero, req.params.superHeroId);                let requestSuperHero = req.body;
                let requestPower = requestSuperHero1.power;                
                superHero.name = requestSuperHero1.name;
                //superHero.power = [];                // delete previous power of our super-hero
                
                superHero.power.forEach(async power => {
                    const p  = await connection.manager.findOne(Power,power.id);
                    await connection.manager.remove(p);
                });                // add new power to our super-hero
                superHero.power= [];
                requestPower.forEach(requestPower => {
                    let power: Power = new Power();
                    power.ability = requestPower;
                    superHero.power.push(power);
                });                
                await connection.manager.save(superHero);
                res.json({message: "Successfully Updated."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }   */ 
    public getStudentById(req: Request, res: Response) {
        connection
            .then(async connection => {
                let stu  = await connection.manager.findOne(student, req.params.studentID);
                res.json(stu)
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }    
    /*public deleteSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {
                let superHero  = await connection.manager.findOne(SuperHero, req.params.superHeroId);                // delete all power first
                superHero.power.forEach(async power => {
                    const p  = await connection.manager.findOne(Power,power.id);
                    await connection.manager.remove(p);
                });                // delete our super-hero
                const s  = await connection.manager.findOne(SuperHero,req.params.superHeroId);
                await connection.manager.remove(s);               
                res.json({message: "Successfully Removed."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }*/
}
export {Controller}
