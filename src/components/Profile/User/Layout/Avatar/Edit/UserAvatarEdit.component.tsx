import React, {useState} from 'react';
import {
    AbortBtn,
    UserAvatarBlock,
    UserAvatarContainer
} from "../../../../../../styles/StyledComponents/Profile/Avatar/UserAvatar.styledComponents";
import {UserAvatar} from "../Photo/UserPhoto.component";
import {UserAvatarEditForm} from "./UserAvatarEditForm.component";
import {IUpdateAvatar} from "../../../../../../API/user.api";
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    photo: string
    bg: string
    handler: (payload: IUpdateAvatar) => void
    toggle: (toggle: boolean) => void
}

export const UserAvatarEdit: React.FC<IProps> = ({photo, bg, handler, toggle}) => {
    const [newPhoto, setNewPhoto] = useState(photo)
    const [newBg, setNewBg] = useState(bg)

    const onChangeBg = (e: React.FormEvent<HTMLInputElement>) =>
        setNewBg(e.currentTarget.value)

    const onChangePhoto = (e: React.FormEvent<HTMLInputElement>) =>
        setNewPhoto(e.currentTarget.value)

    const onSubmit = () =>
        handler({photo: newPhoto, backgroundPhoto: newBg})


    return (
        <UserAvatarContainer image={newBg}>
            <UserAvatarBlock>
                <AbortBtn onClick={() => toggle(false)}><CloseIcon/></AbortBtn>
                <UserAvatar photo={newPhoto}/>
                <UserAvatarEditForm photo={newPhoto} bg={newBg} handler={onSubmit}
                                    onChangePhoto={onChangePhoto} onChangeBg={onChangeBg}/>
            </UserAvatarBlock>
        </UserAvatarContainer>
    );
};

