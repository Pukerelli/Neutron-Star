import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {subsCarsFollowedAction, subsUsersFollowedAction} from "../../../store/actions/list.action";
import {selectListCars, selectListUsers} from "../../../selectors/list/list.selector";
import {selectUserIsFetching, selectUserProfile} from "../../../selectors/user/user.selector";
import {userProfileAction} from "../../../store/actions/user.action";
import {Subscriptions} from './SubsctiptionsLayout/Subscriptions.component';

export const SubscriptionsPage = () => {
    const dispatch = useAppDispatch()
    const [subs, setSubs] = useState<'cars' | 'users'>('users')
    const auth = useSelector(selectAuthUser)
    const user = useSelector(selectUserProfile)
    const userIsFetching = useSelector(selectUserIsFetching)
    const users = useSelector(selectListUsers)
    const cars = useSelector(selectListCars)

    useEffect(() => {
        if (auth === 'unauthorized')
            return
        else
            dispatch(userProfileAction(auth))


        if (subs === 'users')
            dispatch(subsUsersFollowedAction(auth))
        else
            dispatch(subsCarsFollowedAction(auth))

    }, [subs, auth])

    const toggleTarget = (target: 'users' | 'cars') => setSubs(target)

    if (auth === 'unauthorized')
        return <div>please log in</div>

    if (userIsFetching)
        return <div></div>

    return <Subscriptions toggle={toggleTarget} subs={subs} user={user} cars={cars} users={users}/>
}


