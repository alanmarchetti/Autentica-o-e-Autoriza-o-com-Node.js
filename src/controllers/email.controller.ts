import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { transpileModule } from 'typescript';

export const contact = async ( req: Request, res: Response ) => {
    // configurar o transport
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5e3b35dbc2ba59",
          pass: "d57c303ef655c8"
        }
      });

    // configurar a mensagem
    let message = {
        from: req.body.from,
        to: 'teste@gmail.com',
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email,
    };

    // enviar a mensagem
    let info = await transport.sendMail(message);

    res.json({success: true})
};