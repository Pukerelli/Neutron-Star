import {SerializedError} from "@reduxjs/toolkit";

export interface IResponse<R> {
    message: string
    data: R
    code?: number
    token?: string
    error?: IError
}

export interface IUser {
    _id: string
    id: number
    username: string
    fullName?: string
    email: string
    password: string
    photo?: string
    backgroundPhoto?: string
    address?: { country?: string, city?: string }
    contacts?: { telegram?: string, whatsapp?: string }
    drivingExperience?: string
    age?: string
    following: Array<string>
    followingCars: Array<string>
    followedBy: Array<string>
}

export interface ICar {
    id: number
    _id: string
    name: string
    owner: string
    brand: string
    model: string
    generation?: string
    year?: string
    color?: string
    doors?: string
    isStock?: boolean
    engine?: string
    hp?: string
    address?: {
        country?: string
        city?: string
    }
    rims?: string
    equipment?: string
    ownTime?: string
    photo?: string
    mileage?: string
    followedBy: Array<string>
    notes: Array<INote | null>
}

export type IAction<T> = (payload: T) => { type: string, payload: T }


export interface ILogin {
    username: string
    password: string
}

export interface IReg {
    username: string
    password: string
    email: string
}

export interface INote {
    title: string
    date: string
    description: string
    _id: string
}
export interface ICurrentNote extends INote {
    owner: string
}


export type IError = string | SerializedError | undefined | null