import {ICar, ICurrentNote} from "../common/interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('cars')

export const Car = {
    ///// POST
    postAddCar: (payload: IUpdateCar) => requests.post<boolean, IUpdateCar>('add', payload),
    postFollowCar: (payload: { payload: string }) => requests.post<ICar, { payload: string }>('follow', payload),
    postNoteCar: (payload: INewNote) => requests.post<boolean, INewNote>('note', payload),
    ///// PUT
    deleteFollowCar: (payload: { payload: string }) => requests.put<ICar, { payload: string }>('unfollow', payload),
    putUpdateCarPhoto: (payload: IUploadPhoto) => requests.put<ICar, IUploadPhoto>('update/photo', payload),
    putUpdateCar: (payload: IUpdateCar) => requests.put<ICar, IUpdateCar>('update/car', payload),
    putUpdateNote: (payload: IUpdateNote) => requests.put<ICurrentNote, IUpdateNote>('note/change', payload),
    putDeleteNote: (payload: { _id: string, car: string }) => requests.put<string, { _id: string, car: string }>('note', payload),
    ///// GET
    getCurrentCar: (payload: string) => requests.get<ICar, string>('current', payload),
    getCars: (payload: string) => requests.get<Array<ICar>, string>('cars', payload),
    getNote: (payload: string) => requests.get<ICurrentNote, string>('note', payload),
    getFollowedCars: (payload: string) => requests.get<Array<ICar>, string>('follow', payload),
    getSearchCar: (payload: string) => requests.get<Array<ICar>, string>('search', `?search=${payload}`),
    ///// DELETE
    deleteCar: (payload: string) => requests.delete<ICar, string>('car', payload)

}


///// TYPES

export interface IPostFollow {
    username: string
    carname: string
}

export interface IUploadPhoto {
    photo: string
    carName: string
}

export interface IUpdateCar {
    name: string
    brand: string
    model: string
    generation: string
    year: string
    engine: string
    hp: string
    doors: string
    mileage: string
    ownTime: string
    city: string
    color: string
    rims:string
    photo: string
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


