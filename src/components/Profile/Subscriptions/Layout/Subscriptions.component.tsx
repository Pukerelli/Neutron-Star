import React from 'react';
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {
    ProfileLayout,
    SubscriptionsColumn,
    UserAvatarColumn
} from "../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../User/UserProfile/Avatar/UserAvatarBlock.component";
import {
    ListToggle,
    ListToggleContainer
} from "../../../../styles/StyledComponents/Common/List.styledComponent";
import {Users} from '../../../Common/Cards/User/Users.components';
import {Cars} from '../../../Common/Cards/Cars/Cars.component';

interface IProps {
    user: IUser
    users: Array<IUser>
    cars: Array<ICar>
    toggle: (target: 'users' | 'cars') => void
    subs: 'users' | 'cars'
}

export const Subscriptions: React.FC<IProps> = ({user, users, cars, subs, toggle}) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Users')
            toggle('users')
        else
            toggle('cars')
    }
    return (
        <ProfileLayout>
            <SubscriptionsColumn>
                <ListToggleContainer>
                    <ListToggle active={subs === 'users'} marginLeft={true}
                                onClick={onClick}>Users</ListToggle>
                    <ListToggle active={subs === 'cars'}
                                onClick={onClick}>Cars</ListToggle>
                </ListToggleContainer>
                {subs === 'cars' ? <Cars cars={cars}/> : <Users users={users}/>}
            </SubscriptionsColumn>
            <UserAvatarColumn>
                <UserAvatarBlock user={user}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};

