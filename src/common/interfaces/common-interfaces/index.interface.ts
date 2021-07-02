
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
    address?: { country?: string, city?: string }
    age?: string
    interests?: string
    about?: string
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
    followedBy: Array<string>
}





