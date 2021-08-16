import React from 'react';
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {
    ProfileLayout,
    SubscriptionsColumn,
    UserAvatarColumn
} from "../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../User/Layout/Avatar/Block/UserAvatarBlock.component";
import {ListCards, ListToggleCard} from "../../../Common/Cards/ListCards.component.";

interface IProps {
    user: IUser
    users: Array<IUser>
    cars: Array<ICar>
    toggle: (target: 'users' | 'cars') => void
    subs: 'users' | 'cars'
    auth: string
}

export const Subscriptions: React.FC<IProps> = (props) => (
    <ProfileLayout>
        <SubscriptionsColumn>
            <ListToggleCard toggle={props.toggle} target={props.subs}/>
            <ListCards cars={props.cars} users={props.users} target={props.subs}/>
        </SubscriptionsColumn>
        <UserAvatarColumn>
            <UserAvatarBlock auth={props.auth} user={props.user}/>
        </UserAvatarColumn>
    </ProfileLayout>
)

