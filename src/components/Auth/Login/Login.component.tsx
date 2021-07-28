import React, {useEffect} from 'react'
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthErrors, selectAuthUser} from "../../../selectors/auth/auth.selector";
import {useHistory} from 'react-router-dom';
import {authClearErrorsAction, authLoginAction} from "../../../store/actions/auth.action";
import {LoginForm} from "./LoginForm.component";

export const Login: React.FC = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectAuthUser)
    const errors = useSelector(selectAuthErrors)

    useEffect(() => {
        if (isAuth && isAuth !== 'unauthorized')
            history.push(`/profile/user/${isAuth}`)
        return () => {
            dispatch(authClearErrorsAction())
        }
    }, [isAuth])

    const onRegClick = () => history.push('/auth/registration')
    const onSubmit = (values: { username: string, password: string }) => dispatch(authLoginAction(values))

    return  <LoginForm onSubmit={onSubmit} onRegClick={onRegClick} errors={errors}/>
}