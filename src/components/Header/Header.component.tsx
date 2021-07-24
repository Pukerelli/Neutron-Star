import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {HeaderWrapper} from "../../styles/StyledComponents/Header/Header.StyledComponent";
import {HeaderItem} from '../../styles/StyledComponents/Header/HeaderItem.styledComponent';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import {useAppDispatch} from "../../store";
import {authLogoutAction} from "../../store/actions/auth.action";
import {clearStorage} from "../../common/functions";


export const Header: React.FC = () => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const onClick = () => {
        if (auth && auth !== 'unauthorized') {
            clearStorage()
            dispatch(authLogoutAction())
            return
        }
        history.push('/auth/login')
    }
    return (
        <HeaderWrapper>
                <HeaderItem>
                    <NavLink to='/'>Home</NavLink>
                </HeaderItem>
                <HeaderItem>
                    <NavLink to={`/profile/user/${auth}`}>Profile</NavLink>
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
                    <span>{auth && auth !== 'unauthorized' ? 'logout' : 'login'}</span>
                </HeaderItem>
        </HeaderWrapper>
    );
};

