import { getRepository } from "typeorm"
import { Activy } from "../models/Activy"

interface UserId {
    id?:string;
}

class GetActivyService {

    public async execute({id}:UserId){
        console.log('Id do usuário da atividade: ' + id)

        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find();

        if(!activies){
            return {
                message:"activies not found"
            }
        }

        return activies;

    }

}

export {GetActivyService}