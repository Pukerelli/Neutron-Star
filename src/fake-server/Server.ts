import {IUser} from "../common/interfaces/common-interfaces/index.interface";
import {myPhoto} from "../common/images/images";

const Users: IUser[] = [
    {
        id: 1,
        username: 'creator',
        password: 'oooo1234',
        nickname: 'Creator',
        city: {
            city: 'SaintP',
            country: 'Russia'
        },
        photo: {
            small: myPhoto,
            large: myPhoto
        }

    },
    {
        id: 2,
        username: 'mike',
        password: 'oooo1234',
        city: {
            city: 'Moscow',
            country: 'Russia'
        }
    },
    {
        id: 3,
        username: 'luke',
        password: 'oooo1234',
        city: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: 4,
        username: 'david',
        password: 'oooo1234',
        city: {
            city: 'SaintP',
            country: 'Russia'
        }
    },
    {
        id: 5,
        username: 'bob',
        password: 'oooo1234',
        city: {
            city: 'Kiev',
            country: 'Ukraine'
        }
    },
]

export const getUsers = () => {
    return Users
}










