import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';

dotenv.config();

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let sucess = false;
        if (req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');
            if (authType === 'Bearer') {
                try {
                    JWT.verify(
                        token,
                        process.env.JWT_SECRET_KEY as string
                    );
                    sucess = true;
                } catch (e) {
                    
                }
            }
        }
        if (sucess) {
            next();
        } else {
            res.status(403)
            res.json({ msg: 'Acesso não permitido!' });
        }
    }
}