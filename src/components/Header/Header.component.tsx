import React from 'react';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {
    HeaderItem,
    HeaderItemContainer,
    HeaderWrapper
} from "../../styles/StyledComponents/Header/Header.StyledComponent";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import {useDisplayWidth, useLogout} from "../../common/Hooks";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';

export const Header: React.FC = () => {
    const auth = useSelector(selectAuthUser)
    const history = useHistory()
    const width = useDisplayWidth()
    const logout = useLogout()
    const {pathname} = useLocation()

    const onClick = () => {
        if (auth && auth !== 'unauthorized')
            return logout()

        history.push('/auth/login')
    }
    return (
        <HeaderWrapper>
            <HeaderItemContainer>
                <HeaderItem selected={pathname.includes('user')}>
                    <NavLink to={`/user/${auth}`}>
                        {width > 768 ? 'Profile' : <PersonIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('cars') || pathname.includes('notes')}>
                    <NavLink to='/cars/garage'>
                        {width > 768 ? 'Garage' : <DirectionsCarIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('subscriptions')}>
                    <NavLink to='/subscriptions'>
                        {width > 768 ? 'Subscriptions' : <GroupIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('search')}>
                    <NavLink to='/search'>
                        {width > 768 ? 'Search' : <SearchIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={false} onClick={onClick} style={{cursor: 'pointer'}}>
                    <LogoutBtn width={width} auth={auth}/>
                </HeaderItem>
            </HeaderItemContainer>
        </HeaderWrapper>
    );
};

const LogoutBtn: React.FC<ILoginBtn> = ({width, auth}) => {

    if (width < 769) {
        if (auth && auth !== 'unauthorized')
            return <ExitToAppIcon/>
        else
            return <MeetingRoomIcon/>
    }

    return (
        <>
            <span><AccountBoxIcon/> </span>
            <span>{auth && auth !== 'unauthorized' ? 'logout' : 'login'}</span>
        </>
    )
}


interface ILoginBtn {
    width: number
    auth: string
}