import React from 'react';
import {ProfileLayout, SearchColumn} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {SearchInput} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {ListCards, ListToggleCard} from "../../Common/Cards/ListCards.component.";
import {SearchFetching} from "../../Common/Fetching/List.fetchingComponents";
import {SearchAvatarBlock} from './Fetching/SearchAvatarBlock';
import {SearchCards} from "./Fetching/SearchCards";

interface IProps {
    search: 'users' | 'cars'
    cars: Array<ICar>
    users: Array<IUser>
    auth: string
    user: IUser
    toggle: (target: 'users' | 'cars') => void
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    userIsFetching: boolean
    listIFetching: boolean
}

export const Search: React.FC<IProps> = (props) => (
    <ProfileLayout unauthorised={props.auth === 'unauthorized'}>
        <SearchColumn>
            <SearchInput value={props.value} onChange={props.onChange}
                         placeholder='Search something or someone'/>
            <SearchCards target={props.search} isFetching={props.listIFetching}
                         toggle={props.toggle} users={props.users}
                         cars={props.cars}/>
        </SearchColumn>
        <SearchAvatarBlock auth={props.auth} isFetching={props.userIsFetching} user={props.user}/>
    </ProfileLayout>
)


