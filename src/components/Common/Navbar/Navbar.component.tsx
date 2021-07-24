import React, {useState} from 'react';
import {NavbarLayout} from "../../../styles/StyledComponents/Layout/Layout.styledComponent";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {NavButtonShow} from "../Buttons/NavButtonShow";
import {NavHideBtn} from "../../../styles/StyledComponents/Navbar/Navbar.styledComponents";
import { NavbarMenu } from './NavbarMenu.component';


export const Navbar: React.FC = () => {
    const [displayBar, setDisplayBar] = useState(true)

    const navbar = ['MyProfile/profile/user', 'Garage/profile/cars/garage', 'Subs/profile/subscriptions', 'Search/search']
    const navbarHandler = () => {
        setDisplayBar(!displayBar)
    }
    return (
            <NavbarLayout show={displayBar}>
                <NavbarMenu links={navbar}/>
                <NavHideBtn onClick={navbarHandler}>
                    <ArrowForwardIosIcon/>
                </NavHideBtn>
                <NavButtonShow handler={navbarHandler} show={displayBar}/>
            </NavbarLayout>
    );
};

