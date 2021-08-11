import React, {useEffect} from 'react'
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthErrors, selectAuthUser} from "../../../selectors/auth/auth.selector";
import {useHistory, useLocation} from 'react-router-dom';
import {authClearErrorsAction, authLoginAction} from "../../../store/actions/auth.action";
import {LoginForm} from "./LoginForm.component";
import {ILogin} from "../../../API/auth.api";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {pathname} = useLocation()
    const isAuth = useSelector(selectAuthUser)
    const errors = useSelector(selectAuthErrors)

    useEffect(() => {
        if (isAuth !== 'unauthorized' && pathname.includes('auth'))
            history.push(`/profile/user/${isAuth}`)

        return () => {
            dispatch(authClearErrorsAction())
        }
    }, [isAuth])

    const onRegClick = () => history.push('/auth/registration')
    const onSubmit = (values: ILogin) => dispatch(authLoginAction(values))

    return  <LoginForm onSubmit={onSubmit} onRegClick={onRegClick} errors={errors}/>
}