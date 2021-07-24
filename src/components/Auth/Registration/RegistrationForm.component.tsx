import React, {useEffect} from 'react'
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useAppDispatch} from "../../../store";
import {MyCard} from '../../../styles/StyledComponents/Cards/MyCard';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {authRegAction} from "../../../store/actions/auth.action";


interface IValues {
    email: string
    username: string
    password: string
}


export const RegistrationForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const isAuth = useSelector(selectAuthUser)

    useEffect(() => {
        if (isAuth && isAuth !== 'unauthorized')
            history.push(`/profile/user/${isAuth}`)
    }, [isAuth])
    const onSubmit = async (values: IValues) => await dispatch(authRegAction(values))

    return (
        <MyCard boxShadow={true} color='#EB3649'
                width={'35vw'} alignSelf='center' margin='0 auto' minHeight='350px' height={'60vh'} zIndex='1000'>
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
                <Form>
                    <div>
                        <AccountBoxIcon fontSize='large'/>
                        <h2>registration</h2>
                    </div>
                    <div >
                        <label htmlFor="username">username</label>
                        <Field name="username" type="text" placeholder='enter username'/>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <Field name="email" type="email" placeholder='enter email'/>
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Field name="password" type="password" placeholder='enter password'/>
                    </div>
                    <button disabled={false} type="submit">Registration</button>
                </Form>
            </Formik>
        </MyCard>
    )
}

