import { getRepository } from "typeorm"
import { CourseUnit } from "../models/CourseUnit"

interface UserId {
    id?:string;
}

class GetCourseUnitService {
    public async execute({id}:UserId){
        console.log('Id do usuário relacionado: ' + id);
        
        const courseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = await courseUnitRepository.find();

        if(!coursesUnits){
            return {
                message:'courses units not found'
            }
        }

        return coursesUnits;
    }
}

export {GetCourseUnitService}