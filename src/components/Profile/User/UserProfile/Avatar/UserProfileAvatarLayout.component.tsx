import React from 'react';
import {
    UserAvatarBlock,
    UserAvatarContacts,
    UserAvatarContactsLinks,
    UserAvatarContactsTitle,
    UserAvatarContainer,
    UserAvatarImageContainer
} from "../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import {ImgSimple} from '../../../../../styles/StyledComponents/Images/ImgSimple.styledComponent';
import {SocialIcon} from "react-social-icons";

interface IProps {
    photo: string
    photoHandler: (photo: string) => void
    update: boolean
}

export const UserProfileAvatarLayout: React.FC<IProps> = ({photo, photoHandler, update}) => {

    return (
        <UserAvatarContainer image={photo}>
            <UserAvatarBlock>
                <UserAvatarImageContainer>
                    <ImgSimple src={photo} borderRadius='50%'/>
                </UserAvatarImageContainer>
                <UserAvatarContacts>
                    <UserAvatarContactsTitle>Contacts</UserAvatarContactsTitle>
                    <SocialIcon style={{height: '30px', width: '30px'}}
                                url='https://wa.me/79110976307' network='whatsapp' target='_blank'/>
                    <UserAvatarContactsLinks href='https://wa.me/79110976307' target='_blank'>
                        +79110976307
                    </UserAvatarContactsLinks>
                    <SocialIcon style={{height: '30px', width: '30px'}}
                                url="https://telegram.im/@T477AA47" network='telegram' target='_blank'/>
                    <UserAvatarContactsLinks href='https://telegram.im/@T477AA47' target='_blank'>
                        @T477AA47
                    </UserAvatarContactsLinks>
                </UserAvatarContacts>
            </UserAvatarBlock>
        </UserAvatarContainer>
    );
}

