import React from 'react';
import {
    UserAvatarContacts,
    UserAvatarContactsLinks,
    UserAvatarContactsTitle
} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import {SocialIcon} from "react-social-icons";
import {IUser} from '../../../../../../common/interfaces/index.interface';

export const UserContacts: React.FC<{ user: IUser }> = ({user}) => {

    return (
        <UserAvatarContacts>
            <UserAvatarContactsTitle>Contacts</UserAvatarContactsTitle>
            {
                user.contacts?.whatsapp
                    ? <>
                        <SocialIcon style={{height: '30px', width: '30px'}}
                                    url={`https://wa.me/${user.contacts.whatsapp}`}
                                    network='whatsapp' target='_blank'/>
                        <UserAvatarContactsLinks href={`https://wa.me/${user.contacts.whatsapp}`}
                                                 target='_blank'>
                            +{user.contacts.whatsapp}
                        </UserAvatarContactsLinks>
                    </>
                    : null
            }
            {
                user.contacts?.whatsapp
                    ? <>
                        <SocialIcon style={{height: '30px', width: '30px'}}
                                    url={`https://telegram.im/@${user.contacts.telegram}`}
                                    network='telegram' target='_blank'/>
                        <UserAvatarContactsLinks href={`https://telegram.im/@${user.contacts.telegram}`}
                                                 target='_blank'>
                            @{user.contacts.telegram}
                        </UserAvatarContactsLinks>
                    </>
                    : null
            }


        </UserAvatarContacts>
    );
};

