import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import styles from './addCarInfo.module.css'
import {useAppDispatch} from '../../../store';
import {updateCar} from "../../../store/reducers/Cars/Car.slice";
import {useHistory} from "react-router-dom";
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard"
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";

interface IProps {
    carName: string
    car: ICar
}


const validation = Yup.object({
    newName: Yup.string()
        .max(30, 'must be 4 characters or less'),
    generation: Yup.string()
        .max(20, 'are you sure?'),
    year: Yup.string()
        .max(4, 'are you sure?'),
    doors: Yup.string()
        .max(1, 'are you sure?'),
    engine: Yup.string()
        .max(15, 'are you sure?'),
    hp: Yup.string()
        .max(4, 'wow'),
    rims: Yup.string()
        .max(15, 'hm, can you write this a little bit short'),
    ownTime: Yup.string()
        .max(10, 'hm, can you write this a little bit short'),

})


export const UpdateCarInfo: React.FC<IProps> = ({carName, car}) => {
    const initialValues = {
        generation: car?.generation || '',
        year: car?.year || '',
        doors: car?.doors || '',
        isStock: car?.isStock || false,
        engine: car?.engine || '',
        hp: car?.hp || '',
        rims: car?.rims || '',
        ownTime: car?.ownTime || '',

    }
    const dispatch = useAppDispatch()
    const onSubmit = async (values: typeof initialValues) => {
        debugger
        await dispatch(updateCar({...values, carName}))
    }

    return (
        <MyCard boxShadow={true} width='100%' height='50vh' color='#EB3649'>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                <Form className={styles.form}>
                    <div className={styles.div}>
                        <label htmlFor="generation" className={styles.label}>generation</label>
                        <Field name="generation" type="text" className={styles.field} placeHolder='enter generation'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="year" className={styles.label}>year</label>
                        <Field name="year" type="text" className={styles.field} placeHolder='enter year'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="doors" className={styles.label}>doors</label>
                        <Field name="doors" type="text" className={styles.field} placeHolder='enter count of doors'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="engine" className={styles.label}>engine</label>
                        <Field name="engine" type="text" className={styles.field} placeHolder='enter engine'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="hp" className={styles.label}>hp</label>
                        <Field name="hp" type='text' className={styles.field} placeHolder='enter hp'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="rims" className={styles.label}>rims</label>
                        <Field name="rims" type='text' className={styles.field} placeHolder='enter rims'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="ownTime" className={styles.label}>ownTime</label>
                        <Field name="ownTime" type='text' className={styles.field} placeHolder='enter ownTime'/>
                    </div>
                    <button type="submit" className={styles.button}>Submit</button>
                </Form>
            </Formik>
        </MyCard>
    );
};