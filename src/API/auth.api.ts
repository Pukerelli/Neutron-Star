import {IUser} from "../common/interfaces/index.interface";
import {Requests} from './API';

const requests = new Requests('auth')
export const Auth = {
    ///// POST
    postLogin: (payload: ILogin) =>
        requests.post<string, ILogin>('login', payload),
    postRegistration: (payload: IRegistration) =>
        requests.post<string, IRegistration>('registration', payload),
    ///// GET
    getAuth: () => requests.get<IUser>('auth')
}

export interface ILogin {
    username: string
    password: string
}

export interface IRegistration {
    email: string,
    username: string,
    password: string
}



