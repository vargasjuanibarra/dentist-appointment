import { model, Schema } from "mongoose";


export interface User {
    id: string;
    email: string;
    fullName: string;
    password: string;
    birthDate: string;
}

const userSchema = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const UserModel = model<User>('user', userSchema);