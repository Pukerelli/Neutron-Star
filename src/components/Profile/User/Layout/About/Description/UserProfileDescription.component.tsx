import React from 'react';
import {UserDescription} from "../../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import {IUser} from "../../../../../../common/interfaces/index.interface";
import {Name} from '../../../../../../styles/StyledComponents/Common/Common.styledComponents';
import {UserProfileInfo} from './UserInfo/UserProfileInfo.component';
import {UserProfileEdit} from "./UserInfo/Edit/UserProfileEdit.component";
import {EditBtn} from "../../../../../Common/Buttons/Edit/EditBtn.component";

interface IProps {
    user: IUser
    auth: string
    edit: boolean
    toggle: () => void
}

export const UserProfileDescription: React.FC<IProps> = ({user, auth, edit, toggle}) => (
        <UserDescription>
            <Name underline={true}>{user.username}</Name>
            <EditBtn toggle={toggle} edit={edit} display={auth === user.username}/>
            {edit ? <UserProfileEdit user={user} toggle={toggle}/> : <UserProfileInfo user={user}/>}
        </UserDescription>
    )


