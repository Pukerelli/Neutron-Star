import React, {useEffect} from 'react';
import {CarMiniCard} from "../CarMiniCard/CarMiniCard.component";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../selectors/Cars/Car.selector";
import {useAppDispatch} from "../../../store";
import {getFollowedCars} from "../../../store/reducers/Cars/Car.slice";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";

export const FollowedCars = () => {
    const auth = useSelector(selectAuthUser)
    const allCars = useSelector(selectCars)
    const isFetching = useSelector(selectCarIsFetching)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFollowedCars(auth!))
    }, [])

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            {allCars.map((car, index) => <CarMiniCard key={index} car={car} isFetching={isFetching}/>)}
        </div>
    );
};
