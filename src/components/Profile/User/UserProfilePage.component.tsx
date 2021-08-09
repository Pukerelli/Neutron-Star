import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {UserProfile} from "./Layout/UserProfile.component";
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {selectUserErrors, selectUserIsFetching, selectUserProfile} from "../../../selectors/user/user.selector";
import {carGarageAction} from "../../../store/actions/car.action";
import {userProfileAction} from "../../../store/actions/user.action";
import {selectCarIsFetching, selectCars} from "../../../selectors/cars/car.selector";
import {Login} from '../../Auth/Login/Login.component';
import { ProfileFetching } from '../../Common/Fetching/Profile.fetchingComponents';

export const UserProfilePage = () => {
    const [edit, toggleEdit] = useState(false)
    const {username} = useParams<{ username: string }>();
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const error = useSelector(selectUserErrors)
    const user = useSelector(selectUserProfile)
    const cars = useSelector(selectCars)
    const userIsFetching = useSelector(selectUserIsFetching)
    const carIsFetching = useSelector(selectCarIsFetching)

    useEffect(() => {
        if (!username || (username === 'unauthorized' && auth !== 'unauthorized'))
            return history.push(`/profile/user/${auth}`)

        if (username !== 'unauthorized') {
            dispatch(userProfileAction(username))
            dispatch(carGarageAction(username))
            return
        }

    }, [username])

    if (username === 'unauthorized' && auth === 'unauthorized')
        return <Login/>

    const onEditClick = () => toggleEdit(!edit)

    if (error)
        history.push('/404')


    if (userIsFetching || carIsFetching)
        return <ProfileFetching/>

    return <UserProfile cars={cars} user={user} edit={edit} auth={auth}
                        toggle={onEditClick}/>
}

