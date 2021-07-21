import {ICar, INote} from "../common/interfaces/common-interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('cars')

export const Car = {
    ///// POST
    postAddCar: (data: INewCar) => requests.post<ICar, INewCar>('add', data),
    postFollowCar: (data: {payload: string}) => requests.post<ICar, {payload: string }>('follow', data),
    postNoteCar: (data: INewNote ) => requests.post<INote, INewNote>('note', data),
    ///// PUT
    deleteFollowCar: (data: { payload: string }) => requests.put<ICar, { payload: string }>('unfollow', data),
    putUpdatePhoto: (data: IUploadPhoto) => requests.put<ICar, IUploadPhoto>('update/photo', data),
    putUpdateCar: (data: IUpdateCar) => requests.put<ICar, IUpdateCar>('update/car', data),
    putUpdateNote: (data: IUpdateNote) => requests.put<INote, IUpdateNote>('note/change', data),
    putDeleteNote: (data: {_id: string, car: string} ) => requests.put<string, {_id: string, car: string}>('note', data),
    ///// GET
    getCurrent: (data: string) => requests.get<ICar, string>('current', data),
    getCars: (data: string) => requests.get<Array<ICar>, string>('cars', data),
    getFollowedCars: (data: string) => requests.get<Array<ICar>, string>('follow', data),
    getCarSearch: (data: string) => requests.get<Array<ICar>, string>('search', `?search=${data}`),
    ///// DELETE
    deleteCar: (data: string) => requests.delete<ICar, string>('car', data)

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

export interface INewNote {
    title: string
    date: string
    description: string
    _id: string
}

export interface IUpdateNote {
    _id: string
    title?: string
    description?: string
}