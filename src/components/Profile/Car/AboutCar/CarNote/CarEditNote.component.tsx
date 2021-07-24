import React from 'react';
import {INote} from "../../../../../common/interfaces/index.interface";
import {noteValidation} from "../../../../../common/validations";
import {Field, Form, Formik} from "formik";
import {useAppDispatch} from "../../../../../store";
import {carNoteReplaceAction} from "../../../../../store/actions/car.action";


interface IProps{
    note: INote
    cancelHandler: () => void
}

export const CarEditNote: React.FC<IProps> = ({note, cancelHandler}) => {
    const dispatch = useAppDispatch()
    const initialValues = {
        title: note.title || '',
        description: note.description || '',
    }
    const onSubmit = (values: typeof initialValues) => {
        const newNote = {...values, _id: note._id}
        dispatch(carNoteReplaceAction(newNote))
        cancelHandler()
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={noteValidation}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="title">title</label>
                    <Field name="title" type="text" placeholder='enter title'/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <Field name="description" as='textarea' placeholder='enter description'/>
                </div>
                <button type="submit">confirm</button>
                <button type="button" onClick={() => cancelHandler()}>cancel</button>
            </Form>
        </Formik>
    );
};
