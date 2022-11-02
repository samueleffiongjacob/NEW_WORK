import { NextFunction, Request, Response } from 'express';
class APIError extends Error {
    
    
    public static handle(error: Error, _req: Request, res: Response, next: NextFunction) {
        res.status(500).json({ message: error.message || `Internal Server Error`});
        next()
    }

    public static notFound(error: Error, _req: Request, res: Response, next: NextFunction) {
        res.status(404).json({ message: error.message || `Not Found` });
        next()
    }
    
    public static badRequest(error: Error, _req: Request, res: Response, next: NextFunction) {
        res.status(400).json({ message: error.message  || `Invalid Request`});
        next()
    }
    
    public static customError(error: Error, _req: Request, res: Response, next: NextFunction) {
        res.status(500).json({ message: error.message || `Unknown Error` });
        next()
    }
    

}

export  default {
    APIError
}