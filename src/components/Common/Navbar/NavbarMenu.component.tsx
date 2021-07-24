import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavLinkStyled} from "../../../styles/StyledComponents/Navbar/Navbar.styledComponents";

interface IProps {
    links: Array<string>

}

export const NavbarMenu: React.FC<IProps> = ({links}) => {
    return (
        <>
            {
                links.map((link, index) =>
                    <NavLinkStyled key={index}>
                        <NavLink to={`/${link.substring(link.indexOf("/") + 1)}`}>
                            {link.split('/')[0]}
                        </NavLink>
                    </NavLinkStyled>)
            }
        </>
    );
};

