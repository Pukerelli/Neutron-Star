import React from 'react';
import {NavBarContainer} from "../../../styles/StyledComponents/Navbar/Navbar.styledComponents";
import {NavbarMenu} from './NavbarMenu.component';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";


export const Navbar: React.FC<{ hide: boolean }> = ({hide}) => {
    const auth = useSelector(selectAuthUser)

    const navbar = [
        `MyProfile/profile/user/${auth}`,
        'Garage/profile/cars/garage',
        'Subs/profile/subscriptions',
        'Search/search'
    ]

    return (
        <NavBarContainer hide={hide}>
            <NavbarMenu links={navbar}/>
        </NavBarContainer>
    )
}

