import React from 'react';
import {ImgSimple} from "../../../../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {UserAvatarImageContainer} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import {userDefaultImage} from "../../../../../../common/images/images";

interface IProps {
    photo: string
    handler?: (toggle: boolean) => void
}


export const UserAvatar: React.FC<IProps> = ({photo, handler}) => {
    return (
        <UserAvatarImageContainer onClick={() => handler && handler(true)}>
            <ImgSimple  onError={e => e.currentTarget.src = userDefaultImage} src={photo} borderRadius='50%'/>
        </UserAvatarImageContainer>
    );
};
