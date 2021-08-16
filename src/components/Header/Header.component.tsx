import React from 'react';
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {
    HeaderWrapper,
    HeaderItem,
    HeaderItemContainer
} from "../../styles/StyledComponents/Header/Header.StyledComponent";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import {useAppDispatch} from "../../store";
import {authLogoutAction} from "../../store/actions/auth.action";
import {clearStorage} from "../../common/functions";
import {useDisplayWidth} from "../../common/Hooks";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';

export const Header: React.FC = () => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const width = useDisplayWidth()
    const {pathname} = useLocation()

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
            <HeaderItemContainer>
                <HeaderItem selected={pathname.includes('user')}>
                    <NavLink to={`/user/${auth}`}>
                        {width > 767 ? 'Profile' : <PersonIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('cars') || pathname.includes('notes')}>
                    <NavLink to='/cars/garage'>
                        {width > 767 ? 'Garage' : <DirectionsCarIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('subscriptions')}>
                    <NavLink to='/subscriptions'>
                        {width > 767 ? 'Subscriptions' : <GroupIcon fontSize='large'/>}
                    </NavLink>
                </HeaderItem>
                <HeaderItem selected={pathname.includes('search')}>
                    <NavLink to='/search'>
                        {width > 767 ? 'Search' : <SearchIcon fontSize='large'/>}
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

    if (width < 767) {
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