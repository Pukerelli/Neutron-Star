import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useAppDispatch} from '../../../../store';
import {MyCard} from "../../../../styles/StyledComponents/Cards/MyCard"
import {ICar} from "../../../../common/interfaces/index.interface";
import {carUpdateAction} from "../../../../store/actions/car.action";

interface IProps {
    carName: string
    car: ICar
    onEditHandler?: () => void
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


export const UpdateCarInfo: React.FC<IProps> = ({carName, car, onEditHandler}) => {
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
    const onSubmit = (values: typeof initialValues) => {
        dispatch(carUpdateAction({...values, carName}))
        if (onEditHandler)
            onEditHandler()
    }

    return (
        <MyCard boxShadow={true} width='100%' height='50vh' color='#EB3649'>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="generation">generation</label>
                        <Field name="generation" type="text" placeHolder='enter generation'/>
                    </div>
                    <div>
                        <label htmlFor="year">year</label>
                        <Field name="year" type="text" placeHolder='enter year'/>
                    </div>
                    <div>
                        <label htmlFor="doors">doors</label>
                        <Field name="doors" type="text" placeHolder='enter count of doors'/>
                    </div>
                    <div>
                        <label htmlFor="engine">engine</label>
                        <Field name="engine" type="text" placeHolder='enter engine'/>
                    </div>
                    <div>
                        <label htmlFor="hp">hp</label>
                        <Field name="hp" type='text' placeHolder='enter hp'/>
                    </div>
                    <div>
                        <label htmlFor="rims">rims</label>
                        <Field name="rims" type='text' placeHolder='enter rims'/>
                    </div>
                    <div>
                        <label htmlFor="ownTime">ownTime</label>
                        <Field name="ownTime" type='text' placeHolder='enter ownTime'/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </MyCard>
    );
};