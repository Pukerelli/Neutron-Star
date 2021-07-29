import React from 'react';
import {GarageCars} from "./Cars/GarageCars.component";
import {
    ProfileLayout,
    UserAvatarColumn
} from "../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../../User/UserProfile/Avatar/UserAvatarBlock.component";
import {SubscriptionsBlock} from "../../../User/UserProfile/Subscriptions/SubscriptionsBlock.component";
import {ICar, IUser} from "../../../../../common/interfaces/index.interface";

interface IProps {
    cars: Array<ICar>
    user: IUser
    auth: string
}

export const Garage: React.FC<IProps> = ({cars, user, auth}) => {
    return (
        <ProfileLayout>
            <GarageCars owner={auth === user.username} cars={cars}/>
            <UserAvatarColumn>
                <UserAvatarBlock user={user}/>
                <SubscriptionsBlock link='cars/about' following={user.followingCars}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};

