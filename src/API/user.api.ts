import {IUser} from "../common/interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('profile')
export const User = {
    ///// POST
    postUpdateUserPhoto: (payload: {data: string}) => requests.post<string, {data: string}>('user/update/photo', payload),
    postFollowUser: (payload: {payload: string}) => requests.post<IUser, {payload: string}>('user/follow', payload),
    ///// PUT
    putUpdateUser: (payload: IUpdateData) => requests.put<IUser, IUpdateData>('user/update', payload),
    putUnfollowUser: (payload: {payload: string}) => requests.put<IUser, {payload: string}>('user/unfollow', payload),
    ///// GET
    getUser: (payload: string) => requests.get<IUser, string>('user', payload),
    getFollowedUsers: () => requests.get<Array<IUser>, undefined>('user/list/following'),
    getSearchUsers: (payload: string) => requests.get<Array<IUser>, string>('user/list/search', `?search=${payload}`)
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
