import React, {Dispatch, SetStateAction} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import styles from '../../User/UserProfile/UserInfo/updateUser.module.css'
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
                <Form className={styles.form}>
                    <div className={styles.div}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <Field name="name" type="text" className={styles.field} placeHolder='name'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="brand" className={styles.label}>brand</label>
                        <Field name="brand" type="text" className={styles.field} placeHolder='brand'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="model" className={styles.label}>model</label>
                        <Field name="model" type="text" className={styles.field} placeHolder='model'/>
                    </div>
                    <div className={styles.div}>
                        <label htmlFor="generation" className={styles.label}>generation</label>
                        <Field name="generation" type="text" className={styles.field} placeHolder='generation'/>
                    </div>
                    <button type="submit" className={styles.button}>Submit</button>
                </Form>
            </Formik>
        </MyCard>
    );
};
