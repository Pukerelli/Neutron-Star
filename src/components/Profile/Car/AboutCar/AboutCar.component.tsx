import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentCar} from "../../../../selectors/Cars/Car.selector";
import {useHistory, useParams} from "react-router-dom";
import {carCurrentAction} from "../../../../store/actions/car.action";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {INote} from "../../../../common/interfaces/common-interfaces/index.interface";
import {CarNote} from "./CarNote/CarNote.component";
import {CarCard} from "./CarCard/CarCard.component";

export const AboutCar = () => {
    const dispatch = useAppDispatch()
    const car = useSelector(selectCurrentCar)
    const {carname} = useParams<{carname: string}>()
    const isFetching = useSelector(selectCarIsFetching)
    const [note, selectNote] = useState(car.notes[-1])
    const history = useHistory()
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentAction(carname))
    }, [carname])

    const onNoteClick = (note?: INote) => {
        if(note) {
            selectNote(note)
        }else{
            selectNote(null)
        }
    }

    const onNewNoteHandler =() => {
        history.push(`/profile/cars/add/note/${car.name}`)
    }

    if (isFetching || car.name === '')
        return <div></div>
    if(note){
        return <CarNote note={note} handler={onNoteClick}/>
    }

    return <CarCard  car={car} onNoteClick={onNoteClick} onNewNoteHandler={onNewNoteHandler} auth={auth}/>
};

