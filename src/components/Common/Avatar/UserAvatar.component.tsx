import React, {useMemo} from 'react';
import {getRandomInt} from "../../../common/functions";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {AvatarCard} from "./AvatarCard.component";
import {stockPhotos} from '../../../common/images/images';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {profilePhotoAction} from "../../../store/actions/profile.action";

interface IProps{
    user: IUser
}

export const UserAvatar: React.FC<IProps> = ({user}) => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const randomPic = useMemo(() => getRandomInt(0, 9), [])
    const updateUserPhoto = (photo: string) => {
        dispatch(profilePhotoAction({data: photo}))
    }
    return (
        <AvatarCard update={auth === user.username} photoHandler={updateUserPhoto} photo={user.photo? user.photo : stockPhotos[randomPic]} />
    );
};

