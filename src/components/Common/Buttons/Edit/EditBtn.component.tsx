import React from 'react';
import {EditProfileIcon} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

interface IProps {
    toggle: () => void
    edit: boolean
    display: boolean
}

export const EditBtn: React.FC<IProps> = ({toggle, edit, display}) => {

    if(!display)
        return null

    return (
        <EditProfileIcon onClick={toggle}>
            {edit ? <CloseIcon/> : <EditIcon/>}
        </EditProfileIcon>
    )
}


