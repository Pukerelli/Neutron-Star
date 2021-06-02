import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavDisplayBtn} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";


interface IProps {
    show: boolean
    handler: () => void
}
export const NavButtonShow: React.FC<IProps> = ({show, handler}) => {
    return (
        <NavDisplayBtn onClick={handler} show={show}>
            <ArrowForwardIosIcon/>
        </NavDisplayBtn>

    )
}