import {IUser} from "../common/interfaces/common-interfaces/index.interface";
import {myPhoto} from "../common/images/images";

const Users: IUser[] = [
    {
        id: 1,
        fullName: {
            firstName: 'Anton',
            LastName: 'Nissanovich'
        },
        age: 21,
        car: [
            {
                use: 'city',
                brand: 'nissan',
                color: 'deep forest',
                model: 'Almera',
                year: 1998,
                doors: 3,
                engine: 'GA14DE',
                hp: 75,
                generation: 'N15',
                hundred: 12,
                isStock: true,
                ownTime: 18,
                rims: 'Rays Volk Racing CE28 "15',
                turbo: false

            }],

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









export const srcFromServer = ['https://clck.ru/VBApC', 'https://clck.ru/VBAqw', 'https://clck.ru/VBAtY', 'https://clck.ru/VBAuK', 'https://a.d-cd.net/a6582das-960.jpg', 'https://avtoexperts.ru/wp-content/uploads/2020/04/infiniti-fx-s50.jpg']
