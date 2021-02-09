import {Request, Response} from "express";
import {Controller} from "../Controller/Controller";
class Routes {    
    private controller: Controller;    
    constructor() {
        this.controller = new Controller();
    }    
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });// following code is to handle http://localhost:3000/superHero request.
        app.route('/students')
            .get(this.controller.getAllStudents)
            .post(this.controller.addStudents);        // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
        app.route('/students/:studentID')
            .get(this.controller.getStudentById);
           // .put(this.controller.updateSuperHero)
           // .delete(this.controller.deleteSuperHero           );
            }
}
export {Routes};