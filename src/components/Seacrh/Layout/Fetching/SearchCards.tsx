import React from 'react';
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {SearchFetching} from "../../../Common/Fetching/List.fetchingComponents";
import {ListCards, ListToggleCard} from "../../../Common/Cards/ListCards.component.";

interface IProps{
    toggle: (target: 'users' | 'cars') => void
    target: 'users' | 'cars'
    cars: Array<ICar>
    users: Array<IUser>
    isFetching: boolean
}

export const SearchCards: React.FC<IProps> = (props) => {

    if(props.isFetching)
        return <SearchFetching/>

    return (
        <>
            <ListToggleCard toggle={props.toggle} target={props.target}/>
            <ListCards cars={props.cars} users={props.users} target={props.target}/>
        </>
    );
};

