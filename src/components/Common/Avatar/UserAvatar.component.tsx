import React, {useMemo} from 'react';
import {getRandomInt} from "../../../common/functions";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {AvatarCard} from "./AvatarCard.component";
import {stockPhotos} from '../../../common/images/images';
import {useAppDispatch} from "../../../store";
import {updateUserPhotoAction} from "../../../store/reducers/Profile/user.slice";

interface IProps{
    user: IUser
}

export const UserAvatar: React.FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch()
    const randomPic = useMemo(() => getRandomInt(0, 9), [])
    const updateUserPhoto = (photo: string) => {
        dispatch(updateUserPhotoAction(photo))
    }
    return (
        <AvatarCard photoHandler={updateUserPhoto} photo={user.photo? user.photo : stockPhotos[randomPic]} />
    );
};

