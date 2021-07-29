import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentCar} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {carCurrentAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {AboutCar} from "./AboutLayout/AboutCar.component";

export const AboutCarPage = () => {
    const dispatch = useAppDispatch()
    const car = useSelector(selectCurrentCar)
    const {carname} = useParams<{ carname: string }>()
    const isFetching = useSelector(selectCarIsFetching)
    const history = useHistory()
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentAction(carname))
    }, [carname])

    const onNewNoteHandler = () =>
        history.push(`/profile/cars/add/note/${car.name}`)

    if (isFetching || car.name === '')
        return <div></div>

    return <AboutCar car={car} onNewNoteHandler={onNewNoteHandler} auth={auth}/>
};

