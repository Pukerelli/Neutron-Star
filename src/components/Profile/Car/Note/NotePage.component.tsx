import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentNote} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {useAppDispatch} from "../../../../store";
import {carClearErrors, carCurrentNoteAction, carNoteReplaceAction} from "../../../../store/actions/car.action";
import {CarNote} from "./Layout/CarNote.component";
import {CarNoteFetching} from '../../../Common/Fetching/About.fetchingComponents';


export const NotePage: React.FC = () => {
    const [edit, toggleEdit] = useState(false)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {note} = useParams<{ note: string }>()
    const currentNote = useSelector(selectCurrentNote)
    const isFetching = useSelector(selectCarIsFetching)
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentNoteAction(note))
        return () => {
            dispatch(carClearErrors())
        }
    }, [note])

    const onEditClick = () =>
        toggleEdit(!edit)

    const onBackClick = () => {
        history.push(`/cars/about/${currentNote?.carname}`)
        if (edit)
            toggleEdit(false)
    }

    const onSubmit = (values: { title: string, description: string }) => {
        dispatch(carNoteReplaceAction({...values, _id: note}))
        onEditClick()
    }

    if (isFetching || !currentNote)
        return <CarNoteFetching/>

    return <CarNote currentNote={currentNote!} onSubmit={onSubmit} edit={edit}
                    auth={auth} onBackClick={onBackClick} toggleEdit={onEditClick}/>
}





