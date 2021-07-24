import React, {useMemo} from 'react';
import {getRandomInt} from "../../../../../common/functions";
import {IUser} from "../../../../../common/interfaces/index.interface";
import {UserProfileAvatarLayout} from "./UserProfileAvatarLayout.component";
import {stockPhotos} from '../../../../../common/images/images';
import {useAppDispatch} from "../../../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../../selectors/auth/auth.selector";
import {userUpdatePhotoAction} from "../../../../../store/actions/user.action";

interface IProps{
    user: IUser
}

export const UserProfileAvatar: React.FC<IProps> = ({user}) => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const randomPic = useMemo(() => getRandomInt(0, 9), [])
    const updateUserPhoto = (photo: string) => {
        dispatch(userUpdatePhotoAction({data: photo}))
    }
    return (
        <UserProfileAvatarLayout update={auth === user.username} photoHandler={updateUserPhoto} photo={user.photo? user.photo : stockPhotos[randomPic]} />
    );
};

