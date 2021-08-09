import React, {useEffect} from 'react'
import {useAppDispatch} from "../../../store";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuthErrors, selectAuthUser} from "../../../selectors/auth/auth.selector";
import {authClearErrorsAction, authRegAction} from "../../../store/actions/auth.action";
import {RegistrationForm} from './RegistrationForm.component';


interface IValues {
    email: string
    username: string
    password: string
}


export const Registration: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const isAuth = useSelector(selectAuthUser)
    const errors = useSelector(selectAuthErrors)

    useEffect(() => {
        if (isAuth && isAuth !== 'unauthorized')
            history.push(`/profile/user/${isAuth}`)
        return () => {
            dispatch(authClearErrorsAction())
        }
    }, [isAuth])

    const onSubmit = (values: IValues) => dispatch(authRegAction(values))
    const onLoginClick = () => history.push('/auth/login')

    return <RegistrationForm onSubmit={onSubmit} onLoginClick={onLoginClick} errors={errors}/>
}

