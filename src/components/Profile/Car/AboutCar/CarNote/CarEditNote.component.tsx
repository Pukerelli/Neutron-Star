import React from 'react';
import {INote} from "../../../../../common/interfaces/common-interfaces/index.interface";
import {noteValidation} from "../../../../../common/validations";
import {Field, Form, Formik} from "formik";
import styles from "../../CarAdd/addCarInfo.module.css";
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
            <Form className={styles.form}>
                <div className={styles.div}>
                    <label htmlFor="title" className={styles.label}>title</label>
                    <Field name="title" type="text" className={styles.field} placeholder='enter title'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="description" className={styles.label}>description</label>
                    <Field name="description" as='textarea' className={styles.textarea}  placeholder='enter description'/>
                </div>
                <button type="submit" className={styles.button}>confirm</button>
                <button type="button" className={styles.button} onClick={() => cancelHandler()}>cancel</button>
            </Form>
        </Formik>
    );
};
