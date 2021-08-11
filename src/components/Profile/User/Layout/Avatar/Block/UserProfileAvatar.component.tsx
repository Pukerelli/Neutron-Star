import React from 'react';
import {
    UserAvatarBlock,
    UserAvatarContainer
} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import {IUser} from '../../../../../../common/interfaces/index.interface';
import {UserAvatar} from "../Photo/UserPhoto.component";
import {UserContacts} from "../Contacts/UserContacts.component";

interface IProps {
    photo: string
    user: IUser
    handler: (toggle: boolean) => void
    bg: string | undefined
}

export const UserProfileAvatar: React.FC<IProps> = ({photo, user, handler, bg}) => (
    <UserAvatarContainer image={bg || photo}>
        <UserAvatarBlock>
            <UserAvatar photo={photo} handler={handler}/>
            <UserContacts user={user}/>
        </UserAvatarBlock>
    </UserAvatarContainer>
)

