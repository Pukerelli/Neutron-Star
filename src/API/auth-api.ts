import {IUser} from "../common/interfaces/common-interfaces/index.interface";
import {Requests} from './API';

const requests = new Requests('auth')
export const Auth = {
    ///// POST
    postLogin: (data: { username: string, password: string }) =>
        requests.post<IUser, typeof data>('login', data),
    postRegistration: (data: {email: string, username: string, password: string}) =>
        requests.post<undefined, typeof data>('registration', data),
    ///// GET
    getAuth: () => requests.get<IUser>('auth')

}





