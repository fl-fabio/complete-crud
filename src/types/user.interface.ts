import { ICity } from "./city.interface";
import {Schema} from "mongoose";

export interface IUser {
    id?: string,
    name: string,
    surname: string,
    email: string,
    city: Schema.Types.ObjectId;
    phone: string,
    password: string,
}