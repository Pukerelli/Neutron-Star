import React, {useState} from 'react';
import {ICar} from "../../../../../common/interfaces/index.interface";
import {AboutLayout} from "../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {AboutCarDescription} from "./Description/AboutCarDescription.component";
import {CarAvatar} from "./Avatar/CarAvatar.component";
import {CarNotes} from "../../Note/NoteLayout/Notes/CarNotes.component";
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';

interface IProps {
    auth: string
    car: ICar
    onNewNoteHandler: () => void
}

export const AboutCar: React.FC<IProps> = ({car, onNewNoteHandler, auth}) => {
    const [edit, toggleEdit] = useState(false)

    const onEditHandler = () => {
        toggleEdit(!edit)
    }

    return (
        <AboutLayout>
            <AboutCarDescription car={car}/>
            <CarAvatar car={car}/>
            <CommonBtn onClick={onNewNoteHandler} width='800px'
                       display={car.owner === auth} height='40px' grid='span 2'>
                Add Note
            </CommonBtn>
            <CarNotes car={car}/>
        </AboutLayout>
    );
}
