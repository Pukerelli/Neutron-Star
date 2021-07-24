import {IUser} from "../common/interfaces/index.interface";
import {Requests} from './API';

const requests = new Requests('auth')
export const Auth = {
    ///// POST
    postLogin: (payload: { username: string, password: string }) =>
        requests.post<string, typeof payload>('login', payload),
    postRegistration: (payload: {email: string, username: string, password: string}) =>
        requests.post<string, typeof payload>('registration', payload),
    ///// GET
    getAuth: () => requests.get<IUser>('auth')

}





