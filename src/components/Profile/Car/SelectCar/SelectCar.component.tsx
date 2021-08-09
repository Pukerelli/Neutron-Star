import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../../selectors/cars/car.selector";
import {carGarageAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {useHistory} from "react-router-dom";
import {GarageCars} from "../Garage/Layout/Cars/GarageCars.component";
import {SelectLayout} from "../../../../styles/StyledComponents/Cars/Garage/Garage.styledComponents";
import { SelectCarsFetching } from '../../../Common/Fetching/Garage.fetchingComponents';

export const SelectCar = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const cars = useSelector(selectCars)
    const isFetching = useSelector(selectCarIsFetching)
    const auth = useSelector(selectAuthUser)

    if (auth === 'unauthorized')
        history.push('/auth/login')

    useEffect(() => {
        dispatch(carGarageAction(auth))
    }, [])

    if (!isFetching && cars.length < 1)
        history.push(`/profile/cars/add`)

    if (isFetching)
        return <SelectCarsFetching/>

    return (
        <SelectLayout>
            <GarageCars cars={cars} btnHide={false}/>
        </SelectLayout>
    )

}

