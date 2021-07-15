import React, {useEffect} from 'react';
import {CarCard} from "../CarCard.component";
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentCar} from "../../../selectors/Cars/Car.selector";
import {useParams} from "react-router-dom";
import {carCurrentAction} from "../../../store/actions/car.action";

export const AboutCar = () => {
    const dispatch = useAppDispatch()
    const car = useSelector(selectCurrentCar)
    const {carname} = useParams<{carname: string}>()
    const isFetching = useSelector(selectCarIsFetching)


    useEffect(() => {
        dispatch(carCurrentAction(carname))
    }, [carname])

    return (
       <CarCard isFetching={isFetching} car={car}/>

    );
};
