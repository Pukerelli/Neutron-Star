import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import React, {useEffect, useState} from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {useHistory} from 'react-router-dom';
import {MyCard} from '../../../styles/StyledComponents/Cards/MyCard';
import {authLoginAction} from "../../../store/actions/auth.action";


interface IValues {
    username: string
    password: string
}


export const LoginForm: React.FC = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const [isSubmitting, setSubmitting] = useState(false)
    const isAuth = useSelector(selectAuthUser)
    useEffect(() => {
        if (isAuth && isAuth !== 'unauthorized')
            history.push(`/profile/user/${isAuth}`)
    }, [isAuth])

    const onRegClick = () => {
        history.push('/auth/registration')
    }
    const onSubmit = async (values: IValues) => {
        setSubmitting(true)
        await dispatch(authLoginAction(values))
        setSubmitting(false)
    }
    return (
        <MyCard boxShadow={true} color='#EB3649'
                width={'35vw'} alignSelf='center' margin='0 auto' minHeight='350px' height={'60vh'} zIndex='1000'>
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
                <Form>
                    <div>
                        <AccountBoxIcon fontSize='large'/>
                        <h2>log in</h2>
                    </div>
                    <div>
                        <label htmlFor="username">username</label>
                        <Field name="username" type="text" placeholder='enter username'/>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Field name="password" type="password" placeholder='enter password'/>
                    </div>
                    <button disabled={isSubmitting} type="submit">Submit</button>
                    <button onClick={onRegClick}>Registration</button>
                </Form>
            </Formik>
        </MyCard>
    )
}