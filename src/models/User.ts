import { Schema, connection, model, now } from "mongoose";

 type UserTypes = {
    email: string,
    password: string,
    createdAt: Date
};

const UserSchema = new Schema<UserTypes>({
    email: { 
        type: String, 
        required: true
     },
    password: { 
        type: String, 
        required: true 
    },
    createdAt: {
        type: Date, 
        default: now()
    }
});

const modelName: string = 'User';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
    :
    model<UserTypes>(modelName, UserSchema);
