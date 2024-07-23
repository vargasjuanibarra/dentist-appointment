import express, {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { sample_users } from '../data';
import { User, UserModel } from '../models/User.model';

import { HTTP_BAD_REQUEST } from '../constants/http_status';

export const seedUsers = async (req: Request, res: Response) => {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await UserModel.create(sample_users);
    res.send("Seed Is Done!");
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.find();
        res.send(user)
    } catch (error) {
        res.status(500).send('Something went wrong fetching users');
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
      
         if (user && (await bcrypt.compare(password,user.password))) {
          res.send(generateTokenReponse(user));
         }
         else {
           res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
        }
    } catch (error) {
        res.status(500).send('Something went wrong loggin in user');
    }
}

export const registerUser = async (req: Request, res: Response) => {
    const {fullName, email, password, birthDate} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if (user){
        res.status(HTTP_BAD_REQUEST)
        .send('User is already exist, please login!');
        return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser:User = {
        id:'',
        fullName,
        birthDate,
        email: email.toLowerCase(),
        password: encryptedPassword,
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenReponse(dbUser));
    } catch (error) {
        res.status(500).send('Something went wrong registering user');
    }
    
  }

const generateTokenReponse = async (user: User) => {
    const token = jwt.sign(user, process.env.JWT_SECRET!, {expiresIn: '30d'});

    return {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        birthDate: user.birthDate,
    }
}