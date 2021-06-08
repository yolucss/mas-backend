import {Router} from 'express'
import {UserController} from './controller/UserController';
import {CourseUnitController} from './controller/CourseUnitController';
import {ActivyController} from './controller/ActiviController';
import {AuthenticateController} from './controller/AuthenticateControler';
import authenticated from './middlewares/authenticated';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post("/user", userController.create);
routes.post("/auth", authenticateController.create);
routes.get("/user", authenticated, userController.show);
routes.get("/courseunit", authenticated, courseUnitController.show);
routes.get("/activy", authenticated, activyController.show);
routes.post("/courseunit", authenticated, courseUnitController.create);
routes.post("/activy", authenticated, activyController.create);


export default routes;