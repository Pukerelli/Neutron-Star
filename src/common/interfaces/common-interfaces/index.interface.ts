import {SerializedError} from "@reduxjs/toolkit";

export interface IResponse<R>{
    message: string
    data: R
    code?: number
    token?: string
    error?: string
}

export interface IUser {
    _id: number
    username: string
    fullName?: string
    email: string
    password: string
    nickname?: string
    photo?: string
    car?: Array<ICar>
    address?: { country?: string, city?: string }
    age?: string
    interests?: string
    about?: string
}

export interface ICar {
    _id: number | null
    name: string
    owner: string
    brand: string
    model: string
    generation?: string
    year?: string
    doors?: string
    isStock?: boolean
    engine?: string
    hp?: string
    rims?: string
    ownTime?: string
    photo?: string
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
export interface INote{
    title: string
    date: string
    description: string
    car: string
    _id: number
}
export type IError = string | SerializedError | undefined | null