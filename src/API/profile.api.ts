import {IUser} from "../common/interfaces/common-interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('profile')
export const Profile = {
    ///// POST
    postUpdatePhoto: (data: {data: string}) => requests.post<string, {data: string}>('user/update/photo', data),
    postFollowUser: (data: {payload: string}) => requests.post<IUser, {payload: string}>('user/follow', data),
    ///// PUT
    putUpdateUser: (data: IUpdateData) => requests.put<IUser, IUpdateData>('user/update', data),
    putUnfollowUser: (data: {payload: string}) => requests.put<string, {payload: string}>('user/unfollow', data),
    ///// GET
    getUser: (data: string) => requests.get<IUser, string>('user', data),
    getFollowing: () => requests.get<Array<IUser>, undefined>('user/list/following'),
    getSearch: (data: string) => requests.get<Array<IUser>, string>('user/list/search', `?search=${data}`)
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
