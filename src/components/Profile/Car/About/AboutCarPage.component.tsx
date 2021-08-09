import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarError, selectCarIsFetching, selectCurrentCar} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {carCurrentAction, carUpdateAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {AboutCar} from "./AboutLayout/AboutCar.component";
import {AddCarForm} from "../Add/AddCarForm.component";
import {IUpdateCar} from "../../../../API/car.api";

export const AboutCarPage = () => {
    const dispatch = useAppDispatch()
    const [edit, toggleEdit] = useState(false)
    const car = useSelector(selectCurrentCar)
    const errors = useSelector(selectCarError)
    const {carname} = useParams<{ carname: string }>()
    const isFetching = useSelector(selectCarIsFetching)
    const history = useHistory()
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
        return <div></div>

    if(edit)
        return <AddCarForm car={car!} onSubmit={onSubmit} errors={errors} onCancel={onEditHandler}/>

    return <AboutCar car={car!} edit={edit} toggle={onEditHandler}
                     onNewNoteHandler={onNewNoteHandler} auth={auth}/>
};

