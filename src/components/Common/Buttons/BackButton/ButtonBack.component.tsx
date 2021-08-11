import React from 'react';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {NoteBtnBack} from "../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";

interface IProps {
    onBackClick: () => void
}

export const ButtonBack: React.FC<IProps> = ({onBackClick}) => (
    <NoteBtnBack onClick={onBackClick}>
        <ArrowBackIcon fontSize='large'/>
    </NoteBtnBack>
)
