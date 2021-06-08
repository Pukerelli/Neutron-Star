import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import styles from './updateUser.module.css'
import {useAppDispatch} from "../../../../store";
import {UpdateUser} from "../../../../store/reducers/Profile/user.slice";
import {IUser} from "../../../../common/interfaces/common-interfaces/index.interface";




const validation = Yup.object({
    fullName: Yup.string()
        .min(3, 'must be more than 4 characters')
        .max(30, 'must be 4 characters or less'),
    age: Yup.string()
        .min(2, 'enter correct age')
        .max(2, 'are you sure?'),
    Country: Yup.string()
        .min(3, 'enter existing or not country')
        .max(15, 'are you sure?'),
    City: Yup.string()
        .min(2, 'enter existing or not city')
        .max(15, 'are you sure?'),
    interest: Yup.string()
        .min(2, 'i dont think so')
        .max(50, 'sorry, but you have so many interest'),
    about: Yup.string()
        .min(2, 'tell me something about you')
        .max(100, 'hm, can you write this a little bit short'),

})

interface IProps{
    toggleEdit:() => void
    user: IUser
}

export const UserUpdateForm: React.FC<IProps> = ({toggleEdit, user}) => {
    const initialValues = {
        fullName: user.fullName || '',
        country: user.address?.country || '' ,
        city: user.address?.city || '',
        age: user.age || '',
        interests: user.interests || '',
        about: user.about || '',
    }
    const dispatch = useAppDispatch()
    const onSubmit = async (values: typeof initialValues) => {
       await dispatch(UpdateUser(values))
        toggleEdit()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={onSubmit}
        >
            <Form className={styles.form}>
                <div className={styles.div}>
                    <label htmlFor="fullName" className={styles.label}>Name</label>
                    <Field name="fullName" type="text" className={styles.field} placeHolder='enter your name'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="age" className={styles.label}>age</label>
                    <Field name="age" type="text" className={styles.field} placeHolder='enter your age'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="country" className={styles.label}>country</label>
                    <Field name="country" type="text" className={styles.field} placeHolder='enter your country'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="city" className={styles.label}>city</label>
                    <Field name="city" type="text" className={styles.field} placeHolder='enter your city'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="interest" className={styles.label}>interests</label>
                    <Field name="interest" type="text" className={styles.field} placeHolder='enter your interests'/>
                </div>
                <div className={styles.div}>
                    <label htmlFor="about" className={styles.label}>about</label>
                    <Field name="about"  type='text' className={styles.field} placeHolder='enter your age'/>
                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </Form>
        </Formik>
    );
};
