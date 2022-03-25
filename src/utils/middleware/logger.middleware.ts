import { NextFunction, Request, Response } from "express";


export function logger(req: Request, res: Response, next: (error?: Error | NextFunction) => void): any{
        console.log(
            'Request...',
            req.originalUrl,
            'Body----->',
            JSON.stringify(req.body),
            'Params----->',
            JSON.stringify(req.params),
            'Query Params----->',
            JSON.stringify(req.query),
            'Headers ----->',
            JSON.stringify(req.headers),
          );
          next();
    
}