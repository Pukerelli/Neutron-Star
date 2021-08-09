import React from 'react';
import {UserAvatarBlock} from "./Avatar/Block/UserAvatarBlock.component";
import {ICar, IUser} from "../../../../common/interfaces/index.interface";
import {SubscriptionsBlock} from "./Subscriptions/SubscriptionsBlock.component";
import {
    ProfileLayout,
    UserAvatarColumn
} from "../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAbout} from "./About/UserAbout.component";

interface IProps {
    cars: Array<ICar>
    user: IUser
    edit: boolean
    toggle: () => void
    auth: string

}


export const UserProfile: React.FC<IProps> = (props) => {
    return (
        <ProfileLayout>
            <UserAbout {...props}/>
            <UserAvatarColumn>
                <UserAvatarBlock user={props.user}
                                 auth={props.auth}/>
                <SubscriptionsBlock link='user'
                                    following={props.user.following}/>
            </UserAvatarColumn>
        </ProfileLayout>
    );
}
