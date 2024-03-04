import { Jwt } from "jsonwebtoken";
import {Request, Response} from "express";
import { IUser } from "../types/user.interface";
import { findUserByEmail } from "../services/auth.service";
import { createSecretToken } from "../utils/authFunctions";
import { createUser } from "../services/users.service";



export const Signup = async(req: Request, res: Response) => { 
    const user: IUser = req.body;   
   
    const userByEmail = await(findUserByEmail(user.email));
    if (userByEmail) {
        return res.status(400).json({message: "Email already exists"});
    }

    try {
        const userCreated: IUser = await createUser(req.body);
        const token = createSecretToken(userCreated.id!, 30);
        return res.status(200).json({user: "User created", token});

    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}