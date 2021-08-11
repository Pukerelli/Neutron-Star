import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {subsCarsFollowedAction, subsUsersFollowedAction} from "../../../store/actions/list.action";
import {selectListCars, selectListIsFetching, selectListUsers} from "../../../selectors/list/list.selector";
import {selectUserIsFetching, selectUserProfile} from "../../../selectors/user/user.selector";
import {userProfileAction} from "../../../store/actions/user.action";
import {Subscriptions} from './Layout/Subscriptions.component';
import {ListFetching} from '../../Common/Fetching/List.fetchingComponents';
import {Login} from '../../Auth/Login/Login.component';

export const SubscriptionsPage = () => {
    const [subs, setSubs] = useState<'cars' | 'users'>('users')
    const dispatch = useAppDispatch()
    const listIsFetching = useSelector(selectListIsFetching)
    const auth = useSelector(selectAuthUser)
    const user = useSelector(selectUserProfile)
    const userIsFetching = useSelector(selectUserIsFetching)
    const users = useSelector(selectListUsers)
    const cars = useSelector(selectListCars)

    useEffect(() => {
        if (auth === 'unauthorized')
            return
        else {
            dispatch(userProfileAction(auth))
            dispatch(subsUsersFollowedAction(auth))
            dispatch(subsCarsFollowedAction(auth))
        }
    }, [auth])

    const toggleTarget = (target: 'users' | 'cars') => setSubs(target)

    if (auth === 'unauthorized')
        return <Login/>

    if (userIsFetching || listIsFetching)
        return <ListFetching/>

    return <Subscriptions toggle={toggleTarget} subs={subs} auth={auth} user={user}
                          users={users} cars={cars}/>
}


