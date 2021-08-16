import React, {useEffect} from 'react'
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthErrors, selectAuthUser} from "../../../selectors/auth/auth.selector";
import {useHistory} from 'react-router-dom';
import {authClearErrorsAction, authLoginAction} from "../../../store/actions/auth.action";
import {LoginForm} from "./LoginForm.component";
import {ILogin} from "../../../API/auth.api";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const errors = useSelector(selectAuthErrors)

    useEffect(() => {
        if (auth !== 'unauthorized')
            history.push(`/user/${auth}`)

        return () => {
            dispatch(authClearErrorsAction())
        }
    }, [auth])

    const onRegClick = () => history.push('/auth/registration')
    const onSubmit = (values: ILogin) => dispatch(authLoginAction(values))

    return  <LoginForm onSubmit={onSubmit} onRegClick={onRegClick} errors={errors}/>
}