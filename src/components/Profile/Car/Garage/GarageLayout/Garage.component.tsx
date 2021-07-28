import React from 'react';
import {GarageCars} from "./Cars/GarageCars.component";
import {
    ProfileLayout,
    UserAvatarColumn
} from "../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {UserProfileAvatar} from "../../../User/UserProfile/Avatar/UserAvatar.component";
import {SubscriptionsBlock} from "../../../User/UserProfile/Subscriptions/SubscriptionsBlock.component";
import {ICar, IUser} from "../../../../../common/interfaces/index.interface";

interface IProps {
    cars: Array<ICar>
    user: IUser
}

export const Garage: React.FC<IProps> = ({cars, user}) => {
    return (
        <ProfileLayout>
            <GarageCars cars={cars}/>
            <UserAvatarColumn>
                <UserProfileAvatar user={user}/>
                <SubscriptionsBlock link='cars/about' following={user.followingCars}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
};

