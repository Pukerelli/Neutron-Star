import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {
    subsCarsFollowedAction, subsUnfollowCarAction,
    subsUnfollowUserAction,
    subsUsersFollowedAction
} from "../../../store/actions/list.action";
import {selectListCars, selectListUsers} from "../../../selectors/list/list.selector";
import {CarMiniCard} from "../Car/AboutCar/CarCard/CarMiniCard.component";
import {UserCardMini} from "../Cards/UserCards/UserCardMini.component.";

export const Subscriptions = () => {
    const dispatch = useAppDispatch()
    const [subs, setSubs] = useState<'cars' | 'users'>('users')
    const auth = useSelector(selectAuthUser)
    const users = useSelector(selectListUsers)
    const cars = useSelector(selectListCars)

    useEffect(() => {
        if (auth === 'unauthorized') {
            return
        }
        if (subs === 'users') {
            dispatch(subsUsersFollowedAction(auth))
        } else {
            dispatch(subsCarsFollowedAction(auth))
        }
    }, [subs, auth])

    ///// delete
    const onClick = () => {
        if (subs === 'users') {
            setSubs('cars')
        } else {
            setSubs('users')
        }
    }


    if (auth === 'unauthorized') {
        return <div>please log in</div>
    }

    return (
        <div style={{width: '100%'}}>
            <button onClick={onClick}>{subs}</button>
            <div style={{margin: '0 auto', width: '70%'}}>
                {subs === 'users'
                    ? users.map((user, i) => <UserCardMini unfollow={subsUnfollowUserAction} user={user} key={user.id / i}/>)
                    : cars.map((car, i) => <CarMiniCard  unfollow={subsUnfollowCarAction} key={car.id / i} car={car}/>)
                }
            </div>

        </div>
    );
};


