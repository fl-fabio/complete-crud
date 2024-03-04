import { ICity } from "./city.interface";
import {Schema} from "mongoose";

export interface IUser {
    id?: string,
    name: string,
    surname: string,
    email: string,
    city: ICity;
    phone: string,
    password: string,
}