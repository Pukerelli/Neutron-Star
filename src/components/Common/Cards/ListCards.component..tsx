import React from 'react';
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {Cars} from "./Cars/Cars.component";
import {Users} from "./User/Users.components";

interface IProps {
    cars: Array<ICar>
    users: Array<IUser>
    toggle: 'users' | 'cars'
}

export const ListCards: React.FC<IProps> = (props) => {

    if (props.toggle === 'cars')
        return <Cars cars={props.cars}/>

    return <Users users={props.users}/>
}
