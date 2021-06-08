
export interface IResponse<R>{
    code: number
    message: string
    data: R
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
    address?: ICity
    age?: string
    interests?: string
    about?: string
    token: string,
    __v: number | undefined | null
}
export interface ICity {
    country?: string
    city?: string
}

export interface IUserPhoto {
    small: string | null,
    large: string | null
}

export interface ICar {
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
}


