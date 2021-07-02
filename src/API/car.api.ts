import {ICar} from "../common/interfaces/common-interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('cars')

export const Car = {
    ///// POST
    postAddCar: (data: INewCar) => requests.post<ICar, INewCar>('add', data),
    postFollowCar: (carname: {carname: string}) => requests.post<ICar, { carname: string }>('follow', carname),
    ///// PUT
    putUpdatePhoto: (data: IUploadPhoto) => requests.put<ICar, IUploadPhoto>('update/photo', data),
    putUpdateCar: (data: IUpdateCar) => requests.put<ICar, IUpdateCar>('update/car', data),
    ///// GET
    getCurrent: (data: string) => requests.get<ICar, string>('current', data),
    getCars: (data: string) => requests.get<Array<ICar>, string>('cars', data),
    getFollowedCars: (data: string) => requests.get<Array<ICar>, string>('follow', data),
    getCarSearch: (data: string) => requests.get<Array<ICar>, string>('search', `?search=${data}`),
    ///// DELETE
    deleteFollowCar: (data: string) => requests.delete<ICar, string>('follow', data),
    deleteCar: (data: string) => requests.delete<Array<ICar>, string>('car', data)

}


///// TYPES

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
