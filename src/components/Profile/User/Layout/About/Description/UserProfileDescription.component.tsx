import React, {useState} from 'react';
import {UserDescription} from "../../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import {IUser} from "../../../../../../common/interfaces/index.interface";
import {EditProfileIcon, Name} from '../../../../../../styles/StyledComponents/Common/Common.styledComponents';
import EditIcon from '@material-ui/icons/Edit';
import {UserProfileInfo} from './UserInfo/UserProfileInfo.component';
import {UserProfileEdit} from "./UserInfo/Edit/UserProfileEdit.component";
import CloseIcon from '@material-ui/icons/Close';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../../../selectors/auth/auth.selector";

interface IProps {
    user: IUser
}

export const UserProfileDescription: React.FC<IProps> = ({user}) => {
    const auth = useSelector(selectAuthUser)
    const [edit, toggleEdit] = useState(false)
    const onClick = () => {
        toggleEdit(!edit)
    }
    return (
        <UserDescription>
            <Name underline={true}>{user.username}</Name>
            {auth === user.username && <EditProfileIcon onClick={onClick}>
                {edit ? <CloseIcon/> : <EditIcon/>}
            </EditProfileIcon>}
            {edit ? <UserProfileEdit user={user}/> : <UserProfileInfo user={user}/>}
        </UserDescription>
    );
}


