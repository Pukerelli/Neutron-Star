import React, {useState} from 'react';
import {ICar} from "../../../../../common/interfaces/index.interface";
import {AboutCarLayout} from "../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {AboutCarDescription} from "./Description/AboutCarDescription.component";
import {CarAvatar} from "./Avatar/CarAvatar.component";
import {CarNotes} from "./Notes/CarNotes.component";
import { CommonBtn } from '../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';

interface IProps {
    auth: string
    car: ICar
    onNoteClick: (noteId: string) => void
    onNewNoteHandler: () => void
}

export const AboutCar: React.FC<IProps> = ({car, onNoteClick, onNewNoteHandler, auth}) => {
    const [edit, toggleEdit] = useState(false)
    const onEditHandler = () => {
        toggleEdit(!edit)
    }

    return (
        <AboutCarLayout>
            <AboutCarDescription car={car}/>
            <CarAvatar car={car}/>
            {
                car.owner === auth
                    ? <CommonBtn onClick={onNewNoteHandler} width='800px' height='40px' grid='span 2'>Add Note</CommonBtn>
                    : null
            }
            <CarNotes car={car} handler={onNoteClick}/>
        </AboutCarLayout>
    );
}
