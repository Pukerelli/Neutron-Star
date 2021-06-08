import React from 'react';
import {NavLink} from "react-router-dom";
import {HeaderWrapper} from "../../styles/StyledComponents/Header/Header.StyledComponent";
import {HeaderItem} from '../../styles/StyledComponents/Header/HeaderItem.styledComponent';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import {useAppDispatch} from "../../store";


export const Header: React.FC = () => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch({type: 'auth/logout'})
    }


    return (
        <header>
            <HeaderWrapper>
                <HeaderItem>
                    <NavLink to='/'>Home</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to={`/profile/${auth}`}>Profile</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/cars'>Cars</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/shop'>Shop</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to='/services'>Services</NavLink>
                </HeaderItem><HeaderItem>
                <NavLink to='/search'>Search</NavLink>
            </HeaderItem>
                <HeaderItem onClick={onClick} style={{cursor: 'pointer'}}>
                    <span><AccountBoxIcon/></span>
                    {
                        auth && auth != 'unauthorized' ? <span>Logout</span>
                            : <NavLink exact to='/auth/login'>Log in</NavLink>
                    }

                </HeaderItem>
            </HeaderWrapper>
        </header>
    );
};

