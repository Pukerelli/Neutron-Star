import React from 'react';
import {UserAvatarEditFormContainer} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import { Title } from '../../../../../../styles/StyledComponents/Common/Common.styledComponents';
import { CommonBtn } from '../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import { InputText } from '../../../../../../styles/StyledComponents/Common/Forms.styledComponent';

interface IProps {
    photo: string
    bg: string
    onChangePhoto: (e: React.FormEvent<HTMLInputElement>) => void
    onChangeBg: (e: React.FormEvent<HTMLInputElement>) => void
    handler: () => void
}

export const UserAvatarEditForm: React.FC<IProps> = ({photo, bg, onChangePhoto, onChangeBg, handler}) => {
    return (
        <UserAvatarEditFormContainer>
            <Title>Photo: </Title>
            <InputText value={photo} onChange={onChangePhoto}/>
            <Title>Background: </Title>
            <InputText value={bg} onChange={onChangeBg}/>
            <CommonBtn  display={true} width='100%' height='100%' onClick={handler}>Confirm</CommonBtn>
        </UserAvatarEditFormContainer>
    );
};
