import React from 'react';
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Log in</NavLink>
        </header>
    );
};

