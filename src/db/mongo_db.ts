import {connect} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try{
        console.log('Iniciando conexão com o banco de dados');
        await connect(process.env.MONGODB_URL as string);
        console.log('Conectado a base de dados')
    }catch(error){
        console.log(`Erro ao tentar iniciar o mongodb ${error}`);
    }
}