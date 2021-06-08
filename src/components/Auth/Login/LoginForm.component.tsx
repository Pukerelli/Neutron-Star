import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import React, {useEffect, useState} from 'react'
import styles from '../auth.module.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useAppDispatch} from "../../../store";
import {fetchLogin} from "../../../store/reducers/auth-reducer/auth.slice";
import {useSelector} from "react-redux";
import {selectAuthUser, selectLoading} from "../../../selectors/auth/auth.selector";
import { useHistory } from 'react-router-dom';

interface IValues {
    username: string
    password: string
}


export const LoginForm: React.FC = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const [isSubmitting, setSubmitting] = useState(false)
    const isLoading = useSelector(selectLoading)
    const isAuth = useSelector(selectAuthUser)
    useEffect(()=> {
        if(isAuth && isAuth != 'unauthorized')
        history.push('/profile')
    },[isAuth])

    const onRegClick = () => {
        history.push('/auth/registration')
    }
    const onSubmit = async (values: IValues) => {
        setSubmitting(true)
        await dispatch(fetchLogin(values))
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={Yup.object({
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
                    <h2>log in</h2>
                </div>
                <div className={styles.username}>
                    <label htmlFor="username" className={styles.label}>username</label>
                    <Field name="username" type="text" className={styles.field} placeHolder='enter username'/>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password" className={styles.label}>password</label>
                    <Field name="password" type="password" className={styles.field} placeHolder='enter password'/>
                </div>
                <button disabled={isSubmitting} type="submit" className={styles.button}>Submit</button>
                <button onClick={onRegClick} className={styles.regBtn}>Registration</button>

            </Form>
        </Formik>
    )
}