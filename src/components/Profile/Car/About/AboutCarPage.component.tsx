import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarError, selectCarIsFetching, selectCurrentCar} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {carCurrentAction, carUpdateAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {AboutCar} from "./Layout/AboutCar.component";
import {AddCarForm} from "../Add/AddCarForm.component";
import {IUpdateCar} from "../../../../API/car.api";
import {CarFetching} from '../../../Common/Fetching/About.fetchingComponents';

export const AboutCarPage = () => {
    const [edit, toggleEdit] = useState(false)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {carname} = useParams<{ carname: string }>()
    const car = useSelector(selectCurrentCar)
    const errors = useSelector(selectCarError)
    const isFetching = useSelector(selectCarIsFetching)
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentAction(carname))
    }, [carname])

    const onSubmit = (values: IUpdateCar) => {
        dispatch(carUpdateAction(values))
        toggleEdit(!edit)
    }

    const onEditHandler = () =>
        toggleEdit(!edit)

    const onNewNoteHandler = () =>
        history.push(`/profile/cars/add/note/${car?.name}`)

    if (isFetching || !car)
        return <CarFetching/>

    if (edit)
        return <AddCarForm car={car!} onCancel={onEditHandler}
                           onSubmit={onSubmit} errors={errors} />

    return <AboutCar car={car!} edit={edit} toggle={onEditHandler}
                     onNewNoteHandler={onNewNoteHandler} auth={auth}/>
};

