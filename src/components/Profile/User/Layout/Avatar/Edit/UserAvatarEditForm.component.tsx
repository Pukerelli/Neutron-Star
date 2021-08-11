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

export const UserAvatarEditForm: React.FC<IProps> = (props) => (
        <UserAvatarEditFormContainer>
            <Title>Photo: </Title>
            <InputText value={props.photo} onChange={props.onChangePhoto}/>
            <Title>Background: </Title>
            <InputText value={props.bg} onChange={props.onChangeBg}/>
            <CommonBtn width='100%' height='100%' onClick={props.handler}>
                Confirm
            </CommonBtn>
        </UserAvatarEditFormContainer>
    )
