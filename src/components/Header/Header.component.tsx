import React from 'react';
import {NavLink} from "react-router-dom";
import {HeaderWrapper} from "../../styles/StyledComponents/Header/Header.StyledComponent";
import {HeaderItem} from '../../styles/StyledComponents/Header/HeaderItem.styledComponent';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


export const Header: React.FC = () => {
    return (
        <header>
            <HeaderWrapper>
                <HeaderItem>
                    <NavLink to='/'>Home</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/profile'>Profile</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/profile'>Cars</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/profile'>Shop</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/profile'>Services</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <span><AccountBoxIcon/></span>
                    <NavLink to='/login'>Log in</NavLink>
                </HeaderItem>
            </HeaderWrapper>



        </header>
    );
};

