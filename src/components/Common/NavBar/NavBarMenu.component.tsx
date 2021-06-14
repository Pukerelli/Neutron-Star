import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavLinkStyled} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";

interface IProps {
    links: Array<string>
    address: string
}
export const NavBarMenu:React.FC<IProps> = ({links, address}) => {
    return (
        <>
            {links.map((link, index) =>
                <NavLinkStyled key={index}><NavLink to={`/${address}/${link}`}>{link}</NavLink></NavLinkStyled>)}
        </>
    );
};

