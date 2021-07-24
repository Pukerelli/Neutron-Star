import React from 'react';
import {UserProfileLayout} from '../../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {UserProfileAvatar} from "./Avatar/UserAvatar.component";
import {UserProfileDescription} from "./Description/UserProfileDescription.component";
import {UserAbout} from "../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {UserProfileCars} from "./Cars/UserProfileCars.component";
import {Subscriptions} from "./Subscriptions/Subscriptions.component";

interface IProps {
    cars: Array<ICar>
    user: IUser
}


export const UserProfile: React.FC<IProps> = ({user, cars}) => {

    return (
        <UserProfileLayout>
            <UserProfileDescription user={user}/>
            <UserProfileAvatar user={user}/>
            <UserAbout>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam asperiores
                    ea eum inventore molestias, nihil odio officiis quibusdam, quidem repellendus rerum sint,
                    vel voluptates. Ipsam labore modi perferendis.</p>
            </UserAbout>
            <Subscriptions following={user.following}/>
            <UserProfileCars cars={cars}/>
        </UserProfileLayout>
    );
}
