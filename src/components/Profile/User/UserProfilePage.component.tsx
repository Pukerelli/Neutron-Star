import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {UserProfile} from "./UserProfile.component";
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {selectUserErrors, selectUserIsFetching, selectUserProfile} from "../../../../selectors/user/user.selector";
import {carGarageAction} from "../../../../store/actions/car.action";
import {userProfileAction} from "../../../../store/actions/user.action";
import {selectCarIsFetching, selectCars} from "../../../../selectors/cars/car.selector";


export const UserProfilePage = () => {
    const {username} = useParams<{ username: string }>();
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const error = useSelector(selectUserErrors)
    const user = useSelector(selectUserProfile)
    const cars = useSelector(selectCars)
    const userIsFetching = useSelector(selectUserIsFetching)
    const carsIsFetching = useSelector(selectCarIsFetching)

    useEffect(() => {
        if (!username) {
            history.push(`/profile/user/${auth}`)
            return
        }
        if (username !== 'unauthorized') {
            dispatch(userProfileAction(username))
            dispatch(carGarageAction(username))
            return
        }

    }, [username])

    ///// redirecting after login
    useEffect(() => {
        if (username === 'unauthorized' && auth !== 'unauthorized') {
            history.push(`/profile/user/${auth}`)
        }
    }, [username, auth])

    if (error) {
        return <div>user not found</div>
    }
    if(username === 'unauthorized'){
        return <div>please log in</div>
    }
    if(userIsFetching || carsIsFetching){
        return <div/>
    }
    return <UserProfile cars={cars} user={user}/>
}

