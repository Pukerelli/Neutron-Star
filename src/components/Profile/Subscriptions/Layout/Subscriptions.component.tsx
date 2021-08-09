import React from 'react';
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {
    ProfileLayout,
    SubscriptionsColumn,
    UserAvatarColumn
} from "../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../User/Layout/Avatar/Block/UserAvatarBlock.component";
import {ListToggle, ListToggleContainer} from "../../../../styles/StyledComponents/Common/List.styledComponent";
import {Users} from '../../../Common/Cards/User/Users.components';
import {ListCards} from "../../../Common/Cards/ListCards.component.";

interface IProps {
    user: IUser
    users: Array<IUser>
    cars: Array<ICar>
    toggle: (target: 'users' | 'cars') => void
    subs: 'users' | 'cars'
    auth: string

}

export const Subscriptions: React.FC<IProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.innerHTML === 'Users')
            props.toggle('users')
        else
            props.toggle('cars')
    }
    return (
        <ProfileLayout>
            <SubscriptionsColumn>
                <ListToggleContainer>
                    <ListToggle active={props.subs === 'users'} marginLeft={true}
                                onClick={onClick}>Users</ListToggle>
                    <ListToggle active={props.subs === 'cars'}
                                onClick={onClick}>Cars</ListToggle>
                </ListToggleContainer>
                <ListCards cars={props.cars} users={props.users} toggle={props.subs}/>
            </SubscriptionsColumn>
            <UserAvatarColumn>
                <UserAvatarBlock auth={props.auth} user={props.user}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};

