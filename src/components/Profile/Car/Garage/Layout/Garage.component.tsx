import React from 'react';
import {GarageCars} from "./Cars/GarageCars.component";
import {
    ProfileLayout,
    UserAvatarColumn
} from "../../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../../User/Layout/Avatar/Block/UserAvatarBlock.component";
import {SubscriptionsBlock} from "../../../User/Layout/Subscriptions/SubscriptionsBlock.component";
import {ICar, IUser} from "../../../../../common/interfaces/index.interface";

interface IProps {
    cars: Array<ICar>
    user: IUser
    auth: string
}

export const Garage: React.FC<IProps> = ({cars, user, auth}) => {
    return (
        <ProfileLayout>
            <GarageCars btnHide={auth !== user.username} cars={cars}/>
            <UserAvatarColumn>
                <UserAvatarBlock auth={auth} user={user}/>
                <SubscriptionsBlock link='cars/about'
                                    following={user.followingCars}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};

