import {ICar, ICurrentNote, INote} from "../common/interfaces/index.interface";
import {Requests} from "./API";

const requests = new Requests('cars')

export const Car = {
    ///// POST
    postAddCar: (payload: INewCar) => requests.post<ICar, INewCar>('add', payload),
    postFollowCar: (payload: { payload: string }) => requests.post<ICar, { payload: string }>('follow', payload),
    postNoteCar: (payload: INewNote) => requests.post<INote, INewNote>('note', payload),
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


