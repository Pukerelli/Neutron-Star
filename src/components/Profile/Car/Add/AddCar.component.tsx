import React, {useEffect, useState} from 'react';
import {AddCarForm} from "./AddCarForm.component";
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {IUpdateCar} from "../../../../API/car.api";
import {carAddAction, carAddingAction, carClearErrors} from "../../../../store/actions/car.action";
import {useHistory} from "react-router-dom";
import {selectAdding, selectCarError} from "../../../../selectors/cars/car.selector";

export const AddCar: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [newCar, setNewCar] = useState('')
    const adding = useSelector(selectAdding)
    const auth = useSelector(selectAuthUser)
    const errors = useSelector(selectCarError)

    useEffect(() => {
        if (errors)
           return setNewCar('')

        if (adding)
            history.push(`/profile/cars/about/${newCar}`)

        return () => {
            dispatch(carAddingAction(false))
        }
    }, [adding, errors])

    const onSubmit = (values: IUpdateCar) =>{
        dispatch(carAddAction(values))
        dispatch(carClearErrors())
        setNewCar(values.name)
    }

    const onCancel = () =>
        history.push(`/profile/cars/garage/${auth}`)

    if (auth === 'unauthorized')
        history.push('/auth/login')

    return (
        <AddCarForm onSubmit={onSubmit} errors={errors} onCancel={onCancel}/>
    );
};
