

export interface IUser {
    id: number
    username: string
    fullName?: {
        firstName: string
        LastName: string
    }
    email?: string
    password: string
    nickname?: string
    photo?: IUserPhoto
    car?: Array<ICar>
    city: ICity
    age?: number
}

export interface IUserPhoto {
    small: string | null,
    large: string | null
}

export interface ICar {
    brand: string
    model: string
    generation?: number | string
    year: number
    doors?: number
    color?: string
    isStock?: boolean
    engine?: string
    hp?: number
    use?: string
    hundred?: number
    rims?: string
    ownTime?: number
    turbo?: string | boolean
}

export interface ICity {
    country: string
    city: string
}

export interface IError {
    errorMessage: string
}