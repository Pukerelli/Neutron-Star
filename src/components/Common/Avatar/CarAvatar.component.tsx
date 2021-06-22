import React from 'react';
import {AvatarCard} from "./AvatarCard.component";
import {useSelector} from "react-redux";
import {selectCurrentCarPhoto} from "../../../selectors/Cars/Car.selector";
import {defaultImage} from '../../../common/images/images';
import {useAppDispatch} from "../../../store";
import {uploadPhoto} from "../../../store/reducers/Cars/Car.slice";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";

interface IProps {
    carName: string
    photo: string | undefined
    owner: string
}

export const CarAvatar: React.FC<IProps> = ({carName, photo, owner}) => {
    const dispatch = useAppDispatch()
    const auth = useSelector(selectAuthUser)

    const updateCarPhoto = (photo: string) => {
        dispatch(uploadPhoto({photo, carName}))
    }
    return (
        <AvatarCard photo={photo ? photo : defaultImage} update={auth===owner} photoHandler={updateCarPhoto}/>

    );
};

