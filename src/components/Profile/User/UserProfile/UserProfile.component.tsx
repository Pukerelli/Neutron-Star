import React from 'react';
import {UserProfileAvatar} from "./Avatar/UserAvatar.component";
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {SubscriptionsBlock} from "./Subscriptions/SubscriptionsBlock.component";
import {
    ProfileLayout,
    UserAvatarColumn
} from "../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {UserAbout} from "./About/UserAbout.component";

interface IProps {
    cars: Array<ICar>
    user: IUser
}


export const UserProfile: React.FC<IProps> = ({user, cars}) => {


    return (
        <ProfileLayout>
            <UserAbout user={user} cars={cars}/>
            <UserAvatarColumn>
                <UserProfileAvatar user={user}/>
                <SubscriptionsBlock link='user' following={user.following}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
}
