import axios from "axios";
import {ICar, IResponse, IUser} from "../common/interfaces/common-interfaces/index.interface";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',

});

export interface IPostFollow{
    username: string
    carname: string

}

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
        return instance.get<IResponse<Array<ICar>>>(`${this.api}/get/${username}`).then(response => response.data)
    },
    getCurrent(data: string){
        return instance.get<IResponse<ICar>>(`${this.api}/get/current/${data}`).then(response => response.data)
    },
    postFollow(carname: string){
        return instance.post<IResponse<ICar>>(`${this.api}/post/follow`, {carname},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.data)
    },
    deleteFollow(carname: string){
        return instance.delete<IResponse<ICar>>(`${this.api}/delete/follow/${carname}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => response.data)
    },
    getFollowedCars(username: string){
        return instance.get<IResponse<Array<ICar>>>(`${this.api}/get/followed/${username}`)
            .then(response => response.data)
    },
    getCarList(search: string){
        return instance.get<IResponse<Array<ICar>>>(`${this.api}/list/?search=${search}`).then(response => response.data)
    },
    deleteCar(carname: string){
        return instance.delete<IResponse<Array<ICar>>>(`${this.api}/delete/${carname}`).then(response => response.data)
    }
}

