import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavLinkStyled} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";

interface IProps {
    links: Array<any>

}
export const NavBarMenu:React.FC<IProps> = ({links}) => {
    return (
        <>
            {links.map((link, index) =>
                <NavLinkStyled key={index}><NavLink to={`/${link}`}>{link}</NavLink></NavLinkStyled>)}
        </>
    );
};

