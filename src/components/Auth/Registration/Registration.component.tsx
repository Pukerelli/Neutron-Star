import React, {useEffect} from 'react'
import {useAppDispatch} from "../../../store";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuthErrors, selectAuthUser} from "../../../selectors/auth/auth.selector";
import {authClearErrorsAction, authRegAction} from "../../../store/actions/auth.action";
import {RegistrationForm} from './RegistrationForm.component';
import { useState } from 'react';
import {ProfileFetching} from "../../Common/Fetching/Profile.fetchingComponents";


interface IValues {
    email: string
    username: string
    password: string
}


export const Registration: React.FC = () => {
    const dispatch = useAppDispatch()
    const [isComplete, setComplete] = useState(false)
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const errors = useSelector(selectAuthErrors)

    useEffect(() => {
        if (auth && auth !== 'unauthorized'){
            setComplete(true)
            setTimeout(() => history.push(`/user/${auth}`), 3000 )
        }
        return () => {
            dispatch(authClearErrorsAction())
        }
    }, [auth])

    const onSubmit = (values: IValues) => {
        dispatch(authClearErrorsAction())
        dispatch(authRegAction(values))
    }
    const onLoginClick = () => history.push('/auth/login')
    if(isComplete)
        return <ProfileFetching/>

    return <RegistrationForm onSubmit={onSubmit} onLoginClick={onLoginClick} errors={errors}/>
}

