import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../../selectors/cars/car.selector";
import {useAppDispatch} from "../../../../store";
import {useParams} from "react-router-dom";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {carGarageAction} from "../../../../store/actions/car.action";
import {selectUserIsFetching, selectUserProfile} from "../../../../selectors/user/user.selector";
import {userProfileAction} from "../../../../store/actions/user.action";
import {subsCarsFollowedAction} from "../../../../store/actions/list.action";
import {Garage} from "./GarageLayout/Garage.component";


export const GaragePage: React.FC = () => {
        const dispatch = useAppDispatch()
        const carIsFetching = useSelector(selectCarIsFetching)
        const userIsFetching = useSelector(selectUserIsFetching)
        const cars = useSelector(selectCars)
        const user = useSelector(selectUserProfile)
        const {username} = useParams<{ username: string }>()
        const auth = useSelector(selectAuthUser)

        useEffect(() => {
            if (username) {
                dispatch(carGarageAction(username))
                dispatch(userProfileAction(username))
                dispatch(subsCarsFollowedAction(username))
                return
            }
            if (!username && auth !== 'unauthorized') {
                dispatch(carGarageAction(auth))
                dispatch(userProfileAction(auth))
                return
            }
        }, [username, auth])

        if (!username && auth === 'unauthorized') {
            return <div>please log in</div>
        }
        if (userIsFetching || carIsFetching) {
            return <div></div>
        }

        return <Garage cars={cars} user={user}/>
    }


