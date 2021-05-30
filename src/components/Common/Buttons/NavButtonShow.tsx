import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavDisplayBtn} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";


interface IProps {
    display: boolean
    handler: () => void
}
export const NavButtonShow: React.FC<IProps> = ({display, handler}) => {
    return (
        <NavDisplayBtn onClick={handler} display={display}>
            <ArrowForwardIosIcon/>
        </NavDisplayBtn>

    )
}