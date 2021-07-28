import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentCar} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {carCurrentAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {CarNote} from "./Notes/Note/CarNote.component";
import {AboutCar} from "./AboutLayout/AboutCar.component";

export const AboutCarPage = () => {
    const dispatch = useAppDispatch()
    const car = useSelector(selectCurrentCar)
    const {carname} = useParams<{ carname: string }>()
    const isFetching = useSelector(selectCarIsFetching)
    const [note, selectNote] = useState('')
    const history = useHistory()
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentAction(carname))
    }, [carname])

    const onNoteClick = (noteId?: string) => {
        if (noteId)
            selectNote(noteId)
        else
            selectNote('')
    }

    const onNewNoteHandler = () => {
        history.push(`/profile/cars/add/note/${car.name}`)
    }

    if (isFetching || car.name === '')
        return <div></div>

    if (note !== '')
        return <CarNote noteId={note} handler={onNoteClick}/>


    return <AboutCar car={car} onNoteClick={onNoteClick} onNewNoteHandler={onNewNoteHandler} auth={auth}/>
};

