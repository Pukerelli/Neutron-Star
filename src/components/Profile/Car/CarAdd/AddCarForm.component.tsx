import React, {Dispatch, SetStateAction} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useAppDispatch} from '../../../../store';
import {MyCard} from "../../../../styles/StyledComponents/Cards/MyCard";
import {carAddAction} from "../../../../store/actions/car.action";


const validation = Yup.object({
    name: Yup.string()
        .min(3, 'must be more than 4 characters')
        .max(15, 'must be 4 characters or less'),
    brand: Yup.string()
        .min(2, 'enter correct brand')
        .max(15, 'are you sure?'),
    model: Yup.string()
        .min(2, 'min 2')
        .max(15, 'are you sure?'),
    generation: Yup.string()
        .min(2, 'min2')
        .max(15, 'are you sure?')
})

interface IProps {
 setFinished: Dispatch<SetStateAction<boolean>>
}

export const AddCarForm: React.FC<IProps> = ({setFinished}) => {
    const initialValues = {
        name: '',
        brand: '',
        model: '',
        generation: ''
    }
    const dispatch = useAppDispatch()
    const onSubmit = async (values: typeof initialValues) => {
        await dispatch(carAddAction(values))
        setFinished(true)
    }

    return (
        <MyCard boxShadow={true} width='100%' height='50vh' color='#EB3649' padding='1rem'>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" placeHolder='name'/>
                    </div>
                    <div>
                        <label htmlFor="brand" >brand</label>
                        <Field name="brand" type="text" placeHolder='brand'/>
                    </div>
                    <div>
                        <label htmlFor="model">model</label>
                        <Field name="model" type="text" placeHolder='model'/>
                    </div>
                    <div>
                        <label htmlFor="generation">generation</label>
                        <Field name="generation" type="text" placeHolder='generation'/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </MyCard>
    );
};
