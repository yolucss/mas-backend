import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService';
import { GetCourseUnitService } from '../services/GetCourseUnitService';

class CourseUnitController {
    async create(request:Request, response:Response) {
        const courseUnitData = request.body;
        
        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = await createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);
        
    }

    async show(request:Request, response:Response) {
        const userId = request.body.user;

        const getCourseUnit = new GetCourseUnitService();

        const coursesUnits = await getCourseUnit.execute(userId);

        return response.json(coursesUnits);

    }
}

export {CourseUnitController};