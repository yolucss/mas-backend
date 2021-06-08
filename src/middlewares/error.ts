import {Request, Response, NextFunction} from 'express';
import APIError from '../shared/APIError';

export default function error(err: Error, request: Request, response: Response, next: NextFunction){
    
    if (err instanceof APIError) {
        return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: err.message,
    });
}
