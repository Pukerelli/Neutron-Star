import {IUser} from "../common/interfaces/common-interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('profile')
export const Profile = {
    ///// POST
    postUpdatePhoto: (data: {data: string}) => requests.post<string, {data: string}>('user/update/photo', data),
    ///// PUT
    postUpdateUser: (data: IUpdateData) => requests.put<IUser, IUpdateData>('user/update', data),
    ///// GET
    getUser: (data: string) => requests.get<IUser, string>('user', data),
}

///// TYPES
export interface IUpdateData {
    fullName?: string,
    age?: string,
    interests?: string,
    about?: string,
    country?: string,
    city?: string
}
