import React from 'react'
import styles from '../auth.module.css'
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useAppDispatch} from "../../../store";
import {fetchAuth, fetchLogin, fetchRegistration} from "../../../store/reducers/auth-reducer/auth.slice";
import {useHistory} from 'react-router-dom';


interface IValues {
    email: string
    username: string
    password: string
}


export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch()

    const onSubmit = async (values: IValues) => {
    await dispatch(fetchRegistration(values))

    }
    return (
        <Formik
            initialValues={{email: '', username: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string().email().required('required'),
                username: Yup.string()
                    .min(4, 'must be more than 4 characters')
                    .max(10, 'must be 4 characters or less')
                    .required('Required'),
                password: Yup.string()
                    .min(6, 'must be more than 6 characters')
                    .max(15, 'Must be 15 characters or less')
                    .required('Required')
            })}
            onSubmit={onSubmit}
        >
            <Form className={styles.form}>
                <div className={styles.title}>
                    <AccountBoxIcon fontSize='large'/>
                    <h2>registration</h2>
                </div>
                <div className={styles.username}>
                    <label htmlFor="username" className={styles.label}>username</label>
                    <Field name="username" type="text" className={styles.field} placeHolder='enter username'/>
                </div>
                <div className={styles.email}>
                    <label htmlFor="email" className={styles.label}>email</label>
                    <Field name="email" type="email" className={styles.field} placeHolder='enter email'/>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password" className={styles.label}>password</label>
                    <Field name="password" type="password" className={styles.field} placeHolder='enter password'/>
                </div>
                <button disabled={false} type="submit" className={styles.button}>Registration</button>
            </Form>
        </Formik>
    )}

