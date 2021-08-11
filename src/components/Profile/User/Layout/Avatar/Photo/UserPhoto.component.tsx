import React from 'react';
import {ImgSimple} from "../../../../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {UserAvatarImageContainer} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import userDefault from "../../../../../../common/images/userDefault.png";

interface IProps {
    photo: string
    handler?: (toggle: boolean) => void
}

export const UserAvatar: React.FC<IProps> = ({photo, handler}) => (
    <UserAvatarImageContainer onClick={() => handler && handler(true)}>
        <ImgSimple onError={e => e.currentTarget.src = userDefault}
                   src={photo} borderRadius='50%'/>
    </UserAvatarImageContainer>
)
