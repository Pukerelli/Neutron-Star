import React from 'react';
import {NavLinkStyled} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";

interface IProps {
    links: Array<any>

}
export const NavBarMenu:React.FC<IProps> = ({links}) => {
    return (
        <>
            {links.map((link, index) => <NavLinkStyled key={index}>{link}</NavLinkStyled>)}
        </>
    );
};

