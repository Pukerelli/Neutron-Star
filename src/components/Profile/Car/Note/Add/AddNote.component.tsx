import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../../../store";
import date from 'date-and-time';
import {carAddingAction, carCurrentAction, carNotePushAction} from "../../../../../store/actions/car.action";
import {useSelector} from "react-redux";
import {selectAdding, selectCarError, selectCurrentCar} from "../../../../../selectors/cars/car.selector";
import {SelectCar} from "../../SelectCar/SelectCar.component";
import {useHistory, useParams} from "react-router-dom";
import {NoteForm} from "./NoteForm.component";
import {ButtonBack} from "../../../../Common/Buttons/BackButton/ButtonBack.component";
import {NoteCard, NoteLayout} from '../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents';


export const AddNote: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {carname} = useParams<{ carname: string }>()
    const adding = useSelector(selectAdding)
    const car = useSelector(selectCurrentCar)
    const error = useSelector(selectCarError)

    useEffect(() => {
        if (carname)
            dispatch(carCurrentAction(carname))
        return () => {
            dispatch(carAddingAction(false))
        }
    }, [carname])

    useEffect(() => {
        if (adding)
            history.push(`/cars/about/${carname}`)
    }, [adding])

    const onSubmit = (values: { title: string, description: string }) => {
        const now = date.format(new Date(), 'MMM DD YYYY')
        dispatch(carNotePushAction({...values, date: now, _id: car!._id}))
    }
    const onBackClick = () => history.push(`/cars/about/${carname}`)

    if ((!carname || error))
        return <SelectCar/>

    return (
        <NoteLayout>
            <NoteCard edit={true}>
                <ButtonBack onBackClick={onBackClick}/>
                <NoteForm onSubmit={onSubmit}/>
            </NoteCard>
        </NoteLayout>
    )
}



