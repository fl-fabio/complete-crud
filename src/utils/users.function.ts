import { findCity } from "../services/cities.service";
import { ICity } from "../types/city.interface";
import { IUser } from "../types/user.interface";

/* export const userWithCity = async (user: IUser) => {
    const completeCity = await findCity(user.city as string);
    return {...user, city: completeCity as ICity};
}; */

/* export const usersWithCity = (users: IUser[]) => {
  return users.map((user: IUser) => userWithCity(user)) ;
}; */
