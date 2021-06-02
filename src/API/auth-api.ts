import axios from 'axios'
import {IUser} from "../common/interfaces/common-interfaces/index.interface";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',

});

interface IReg {
    token: string
    message: string
    code: number

}

interface ILogin {
    token: string
    code: number
    user: IUser
    message: string
    status: number
}

export const AuthAPI = {
    api: '/auth',
    login(username: string, password: string) {
        return instance.post<ILogin>(`${this.api}/login`, {
            username,
            password
        }).then(response => {
            localStorage.setItem('token', response.data.token)
            return response.data
        })
    },
    auth() {
        return instance.get<ILogin>(`${this.api}/auth`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            localStorage.setItem('token', response.data.token)
            return response.data
        })
    },

    registration(email: string, username: string, password: string) {
        return instance.post<IReg>(`${this.api}/registration`,
            {email, username, password})
            .then(response => {
                    localStorage.setItem('token', response.data.token)
                    return response.data
                })
    }

}