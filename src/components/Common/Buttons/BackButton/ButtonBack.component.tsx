import React from 'react';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {BtnBack} from "../../../../styles/StyledComponents/Common/Common.styledComponents";

interface IProps {
    onBackClick: () => void
}

export const ButtonBack: React.FC<IProps> = ({onBackClick}) => (
    <BtnBack onClick={onBackClick}>
        <ArrowBackIcon fontSize='large'/>
    </BtnBack>
)
