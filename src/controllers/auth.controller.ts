import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import User from '../models/User';

dotenv.config();

export const register = async (req: Request, res: Response) => {
    let { email, password } = req.body;
    try {
        if (email && password) {
            let hasUser = await User.findOne({ email });

            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(password, salt);

            if (!hasUser) {
                let new_user = await User.create({
                    email,
                    password: hash
                });

                const token = JWT.sign(
                    { id: new_user._id, email: new_user.email },
                    process.env.JWT_SECRET_KEY as string,
                    { expiresIn: '6h' }
                );

                return res.status(200).json({ id: new_user._id, token });

            } 
            return res.status(400).json({ msg: 'Email já existe! ' });
            
        }

        return res.json({ msg: 'Email e/ou senha não enviado' });

    } catch (e) {
        console.log(e)
    }
};

export const login = async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;

    try {
        if (req.body.email && req.body.password) {

            let user = await User.findOne({ email });
            if (!user) res.status(400).json({ msg: "Email e/ou senha incorreto!" });

            const validatePassword = await bcryptjs.compare(password, user.password);

            if (!validatePassword) return res.status(401).json({ msg: "Email e/ou senha incorreto!" });

            const token = JWT.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET_KEY as string,
                { expiresIn: '6h' }
            );
            res.status(200).json({ status: true, token });
            return;

        }
        return res.status(400).json({ msg: "Email e/ou senha precisam ser informados" });
    } catch (e) {
        console.log(e)
    }
};

export const list = async (req: Request, res: Response) => {

    let user = await User.find({});
    let list: string[] = [];

    for (let i in user) {
        list.push(user[i].email);
    }
    res.json({ list })
};