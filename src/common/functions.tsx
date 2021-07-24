import {ICar, IUser} from "./interfaces/index.interface";

export const  getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///// STORAGE HELPERS
export const setStorage = (name: string, value: any) => localStorage.setItem(name, value)
export const clearStorage = () => localStorage.clear()


///// CHECK TYPE
export const isCar = (inst: ICar | IUser): inst is ICar => {
    return (inst as ICar).owner !== undefined;
}
