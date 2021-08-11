import React from 'react';
import {
    ProfileLayout,
    SearchColumn,
    UserAvatarColumn
} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../Profile/User/Layout/Avatar/Block/UserAvatarBlock.component";
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {SearchInput} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {ListCards, ListToggleCard} from "../../Common/Cards/ListCards.component.";
import {AvatarBlockFetching} from "../../Common/Fetching/Common.fetchingComponents";
import {SearchFetching} from "../../Common/Fetching/List.fetchingComponents";

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
    <ProfileLayout>
        <SearchColumn>
            <SearchInput value={props.value} onChange={props.onChange}
                         placeholder='Search something or someone'/>
            {props.listIFetching ? <SearchFetching/>
                : <>
                    <ListToggleCard toggle={props.toggle} subs={props.search}/>
                    <ListCards cars={props.cars} users={props.users} toggle={props.search}/>
                </>}

        </SearchColumn>
        {props.userIsFetching ? <AvatarBlockFetching/>
            : <UserAvatarColumn>
                <UserAvatarBlock user={props.user} auth={props.auth}/>
            </UserAvatarColumn>}
    </ProfileLayout>
)
