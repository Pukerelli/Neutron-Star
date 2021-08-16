import React from 'react';
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {Cars} from "./Cars/Cars.component";
import {Users} from "./User/Users.components";
import {ListToggle, ListToggleContainer} from "../../../styles/StyledComponents/Common/List.styledComponent";

interface ICards {
    cars: Array<ICar>
    users: Array<IUser>
    target: 'users' | 'cars'
}

interface IToggle {
    toggle: (target: 'users' | 'cars' ) => void
    target: 'users' | 'cars'
}

export const ListCards: React.FC<ICards> = (props) => {
    if (props.target === 'cars')
        return <Cars cars={props.cars}/>

    return <Users users={props.users}/>
}

export const ListToggleCard: React.FC<IToggle> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Users')
            props.toggle('users')
        else
            props.toggle('cars')
    }

 return (
    <ListToggleContainer>
        <ListToggle active={props.target === 'users'} marginLeft={true}
                    onClick={onClick}>Users</ListToggle>
        <ListToggle active={props.target === 'cars'}
                    onClick={onClick}>Cars</ListToggle>
    </ListToggleContainer>
)
}
