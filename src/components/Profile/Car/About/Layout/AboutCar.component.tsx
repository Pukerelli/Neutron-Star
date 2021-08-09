import React, {useState} from 'react';
import {ICar} from "../../../../../common/interfaces/index.interface";
import {
    AboutCarBtnContainer,
    AboutLayout
} from "../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {AboutCarDescription} from "./Description/AboutCarDescription.component";
import {CarAvatar} from "./Avatar/CarAvatar.component";
import {CarNotes} from "../../Note/Layout/Notes/CarNotes.component";
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import {EditBtn} from "../../../../Common/Buttons/Edit/EditBtn.component";
import {AddCarForm} from "../../Add/AddCarForm.component";

interface IProps {
    auth: string
    car: ICar
    onNewNoteHandler: () => void
    edit: boolean
    toggle: () => void
}

export const AboutCar: React.FC<IProps> = ({car, onNewNoteHandler, auth, edit, toggle}) => {

    return (
        <AboutLayout>
            <AboutCarDescription car={car} auth={auth} edit={edit} toggle={toggle}/>
            <CarAvatar car={car}/>
            <AboutCarBtnContainer>
                <CommonBtn onClick={onNewNoteHandler} width='800px'
                           hide={car.owner !== auth} height='40px' grid='span 2'>
                    Add Note
                </CommonBtn>
            </AboutCarBtnContainer>
            <CarNotes car={car}/>
        </AboutLayout>
    );
}
