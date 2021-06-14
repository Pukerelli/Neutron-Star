import React, {useState} from 'react';
import {NavBarLayout} from "../../../styles/StyledComponents/Layout/Layout.styledComponent";
import {NavBarMenu} from "./NavBarMenu.component";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {NavButtonShow} from "../Buttons/NavButtonShow";
import {NavHideBtn} from "../../../styles/StyledComponents/NavBar/NavBar.styledComponents";

interface IProps{
    navBar: Array<string>
    address: string
}

export const NavBar: React.FC<IProps> = ({navBar, address}) => {
    const [displayBar, setDisplayBar] = useState(true)
    const navBarHandler = () => {
        setDisplayBar(!displayBar)
    }
    return (
        <div>
            <NavBarLayout show={displayBar}>
                <NavBarMenu links={navBar} address={address}/>
                <NavHideBtn onClick={navBarHandler}>
                    <ArrowForwardIosIcon/>
                </NavHideBtn>
            </NavBarLayout>
            <NavButtonShow handler={navBarHandler} show={displayBar}/>
        </div>
    );
};

