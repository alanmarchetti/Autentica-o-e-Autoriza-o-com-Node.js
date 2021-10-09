import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoConnect } from './db/mongo_db';
import apiRoutes from './routes/api_routes';

dotenv.config();
mongoConnect();
const server  = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado'})
});

server.listen(process.env.PORT);