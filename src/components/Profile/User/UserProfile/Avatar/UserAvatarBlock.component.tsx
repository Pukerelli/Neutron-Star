import React, {useMemo, useState} from 'react';
import {getRandomInt} from "../../../../../common/functions";
import {IUser} from "../../../../../common/interfaces/index.interface";
import {UserProfileAvatar} from "./UserProfileAvatar.component";
import {stockPhotos} from '../../../../../common/images/images';
import {useAppDispatch} from "../../../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../../selectors/auth/auth.selector";
import {userUpdatePhotoAction} from "../../../../../store/actions/user.action";
import {IUpdateAvatar} from "../../../../../API/user.api";
import {UserAvatarEdit} from "./Edit/UserAvatarEdit.component";

interface IProps {
    user: IUser
}

export const UserAvatarBlock: React.FC<IProps> = ({user}) => {
    const [edit, toggleEdit] = useState(false)
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const randomPic = useMemo(() => getRandomInt(0, 9), [])

    const updateUserPhoto = (payload: IUpdateAvatar) => {
        dispatch(userUpdatePhotoAction(payload))
        toggleEdit(false)
    }

    if (edit && auth === user.username)
        return <UserAvatarEdit bg={user.backgroundPhoto || stockPhotos[randomPic]}
                               photo={user.photo || stockPhotos[randomPic]}
                               handler={updateUserPhoto} toggle={toggleEdit}/>

    return <UserProfileAvatar handler={toggleEdit} user={user} bg={user.backgroundPhoto}
                              photo={user.photo ? user.photo : stockPhotos[randomPic]}/>
}

