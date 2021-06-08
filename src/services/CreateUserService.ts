import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';
import {User} from '../models/User';
import APIError from '../shared/APIError'

interface UserData {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({name, email, password}: UserData): Promise<User | {}>{

        const usersRepository = getRepository(User);
        
        const checkUserExists = await usersRepository.findOne({email});

        if(checkUserExists){
            //throw new APIError('Email adrres already exist');
            return {
                error:"Email adrres already exist"
            }
        }

        const hashedPassword = await hash(password, 8);
        
        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);

        return user;

    }
}

export {CreateUserService};