import React from 'react';
import {AvatarCard} from "./AvatarCard.component";
import {useSelector} from "react-redux";
import {selectCurrentCarPhoto} from "../../../selectors/Cars/Car.selector";
import {defaultImage} from '../../../common/images/images';
import {useAppDispatch} from "../../../store";
import {uploadPhoto} from "../../../store/reducers/Cars/Car.slice";

interface IProps {
    carName: string
    photo: string | undefined
}

export const CarAvatar: React.FC<IProps> = ({carName, photo}) => {
    const dispatch = useAppDispatch()

    const updateCarPhoto = (photo: string) => {
        dispatch(uploadPhoto({photo, carName}))
    }
    return (
        <AvatarCard photo={photo ? photo : defaultImage} photoHandler={updateCarPhoto}/>

    );
};

