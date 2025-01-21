import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';


export function validateData(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    path: issue.path.join('.'),
                    error: issue.message,
                    code: issue.code,
                    fatal: issue.fatal,
                }))
                res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data - validation error', details: errorMessages });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
            }
        }
    };
}