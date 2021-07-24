import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../../selectors/cars/car.selector";
import {carGarageAction} from "../../../../store/actions/car.action";
import {GridLayout} from "../../../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {CarMiniCard} from "../AboutCar/CarCard/CarMiniCard.component";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {useHistory} from "react-router-dom";

export const SelectCar = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const isFetching = useSelector(selectCarIsFetching)
    const cars = useSelector(selectCars)
    const auth = useSelector(selectAuthUser)
    if(auth === 'unauthorized'){
        history.push('/auth/login')
    }
    useEffect(() => {
        dispatch(carGarageAction(auth))
    }, [])
    if(cars.length < 1){
        return <div>add car</div>
    }
    return (
        <GridLayout width='80%' overflow='scroll' margin='0 auto'>
            {cars.map(car => <CarMiniCard car={car} path={`/cars/add/note/${car.name}`} btn={false}/>)}
        </GridLayout>
    );
};

