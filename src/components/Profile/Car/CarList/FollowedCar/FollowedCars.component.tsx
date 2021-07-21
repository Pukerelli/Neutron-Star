import React, {useEffect} from 'react';
import {CarMiniCard} from "../../AboutCar/CarCard/CarMiniCard.component";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../../../selectors/Cars/Car.selector";
import {useAppDispatch} from "../../../../../store";
import {selectAuthUser} from "../../../../../selectors/auth/auth.selector";
import {useHistory} from "react-router-dom";
import {carFollowedAction} from "../../../../../store/actions/car.action";

export const FollowedCars = () => {
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const allCars = useSelector(selectCars)
    const isFetching = useSelector(selectCarIsFetching)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (auth !== 'unauthorized') {
            dispatch(carFollowedAction(auth))
            return
        }
        if (auth === 'unauthorized') {
            history.push('/auth/login')
            return
        }
    }, [auth])

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            {allCars.map((car, index) => <CarMiniCard key={index} car={car} isFetching={isFetching}/>)}
        </div>
    );
};
