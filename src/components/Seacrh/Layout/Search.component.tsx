import React from 'react';
import {
    ProfileLayout,
    SearchColumn,
    UserAvatarColumn
} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ListToggle, ListToggleContainer} from "../../../styles/StyledComponents/Common/List.styledComponent";
import {Users} from "../../Common/Cards/User/Users.components";
import {UserAvatarBlock} from "../../Profile/User/Layout/Avatar/Block/UserAvatarBlock.component";
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {SearchInput} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {ListCards} from "../../Common/Cards/ListCards.component.";

interface IProps {
    search: 'users' | 'cars'
    cars: Array<ICar>
    users: Array<IUser>
    auth: string
    user: IUser
    toggle: (target: 'users' | 'cars') => void
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: React.FC<IProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Users')
            props.toggle('users')
        else
            props.toggle('cars')
    }

    return (
        <ProfileLayout>
            <SearchColumn>
                <SearchInput value={props.value} onChange={props.onChange}
                             placeholder='Search something or someone'/>
                <ListToggleContainer>
                    <ListToggle active={props.search === 'users'} marginLeft={true}
                                onClick={onClick}>Users</ListToggle>
                    <ListToggle active={props.search === 'cars'}
                                onClick={onClick}>Cars</ListToggle>
                </ListToggleContainer>
                <ListCards cars={props.cars} users={props.users} toggle={props.search}/>
            </SearchColumn>
            <UserAvatarColumn>
                <UserAvatarBlock user={props.user} auth={props.auth}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};
