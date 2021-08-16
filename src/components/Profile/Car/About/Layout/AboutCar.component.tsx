import React from 'react';
import {ICar} from "../../../../../common/interfaces/index.interface";
import {
    AboutCarBtnContainer,
    AboutLayout
} from "../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {AboutCarDescription} from "./Description/AboutCarDescription.component";
import {CarAvatar} from "./Avatar/CarAvatar.component";
import {CarNotes} from "../../Note/Layout/Notes/CarNotes.component";
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';

interface IProps {
    auth: string
    car: ICar
    onNewNoteHandler: () => void
    edit: boolean
    toggle: () => void
    onOwnerClick: () => void
}

export const AboutCar: React.FC<IProps> = (props) => (
    <AboutLayout owner={props.auth === props.car.owner}>
        <AboutCarDescription car={props.car} auth={props.auth}
                             toggle={props.toggle} edit={props.edit}/>
        <CarAvatar car={props.car} onOwnerClick={props.onOwnerClick}/>
        <AboutCarBtnContainer hide={props.car.owner !== props.auth}>
            <CommonBtn width='100%' height='40px' grid='span 2'
                       onClick={props.onNewNoteHandler}>
                Add Note
            </CommonBtn>
        </AboutCarBtnContainer>
        <CarNotes car={props.car}/>
    </AboutLayout>
)
