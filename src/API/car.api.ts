import axios from "axios";
import {ICar, IResponse} from "../common/interfaces/common-interfaces/index.interface";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',

});

export interface INewCar {
    name: string,
    brand: string,
    model: string,
    generation: string
}
export interface IUploadPhoto {
    photo: string
    carName: string
}

export interface IUpdateCar {
    generation?: string
    year?: string
    doors?: string
    isStock?: boolean
    engine?: string
    hp?: string
    rims?: string
    ownTime?: string
    carName: string
}

export interface IGetCars{
    data: Array<ICar>,
    code: number
    message: string

}

export const CarAPI ={
    api: '/cars',
    add(data: INewCar){
        return instance.post<IResponse<ICar>>(`${this.api}/add`, {...data},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.data)
    },
    uploadPhoto(data: IUploadPhoto) {
        return instance.put<IResponse<ICar>>(`${this.api}/update/photo`, {...data}).then(response => response.data)
    },
    updateCar(data: IUpdateCar){
        return instance.put<IResponse<ICar>>(`${this.api}/update`, {...data}).then(response => response.data)
    },
    getCars(username: string){
        return instance.get<IGetCars>(`${this.api}/get/${username}`).then(response => response.data)
    },
    getCurrent(data: string){
        return instance.get<IResponse<ICar>>(`${this.api}/get/current/${data}`).then(response => response.data)
    }
}

