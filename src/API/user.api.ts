import axios from "axios";
import {IResponse, IUser} from "../common/interfaces/common-interfaces/index.interface";


const instance = axios.create({
    baseURL: 'http://localhost:5000/api',

});

export interface IUpdateData {
    fullName?: string,
    age?: string,
    interest?: string,
    about?: string,
    country?: string,
    city?: string
}

export interface IPayload<D> {
    payload: D
}


export const UserAPI = {
    api: '/profile',
    update(data: IUpdateData) {
        return instance.put<IResponse<IUser>>(`${this.api}/user/update`,
            {...data},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.data)
    },
    get(username: string) {
        return instance.get<IResponse<IUser>>(`${this.api}/user/${username}`)
            .then(response => response.data)
    },
    updatePhoto(data: IPayload<string>) {
        return instance.post<IResponse<IUser>>(`${this.api}/user/update/photo`, {...data},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.data)
    }
}




