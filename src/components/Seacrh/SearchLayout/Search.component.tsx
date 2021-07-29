import React from 'react';
import {
    ProfileLayout,
    SearchColumn,
    UserAvatarColumn
} from "../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {ListToggle, ListToggleContainer} from "../../../styles/StyledComponents/Common/List.styledComponent";
import {Cars} from "../../Common/Cards/Cars/Cars.component";
import {Users} from "../../Common/Cards/User/Users.components";
import {UserAvatarBlock} from "../../Profile/User/UserProfile/Avatar/UserAvatarBlock.component";
import {ICar, IUser} from "../../../common/interfaces/index.interface";
import {SearchInput} from "../../../styles/StyledComponents/Common/Common.styledComponents";

interface IProps {
    search: 'users' | 'cars'
    cars: Array<ICar>
    users: Array<IUser>
    user: IUser
    toggle: (target: 'users' | 'cars') => void
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: React.FC<IProps> = ({search, cars, users, user, toggle, value, onChange}) => {

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Users')
            toggle('users')
        else
            toggle('cars')
    }
    return (
        <ProfileLayout>
            <SearchColumn>
                <SearchInput value={value} onChange={onChange} placeholder='Search something or someone'/>
                <ListToggleContainer>
                    <ListToggle active={search === 'users'} marginLeft={true}
                                onClick={onClick}>Users</ListToggle>
                    <ListToggle active={search === 'cars'}
                                onClick={onClick}>Cars</ListToggle>
                </ListToggleContainer>
                {search === 'cars' ? <Cars cars={cars}/> : <Users users={users}/>}
            </SearchColumn>
            <UserAvatarColumn>
                <UserAvatarBlock user={user}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};
