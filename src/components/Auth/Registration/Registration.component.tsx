import React, {useEffect} from "react"
import { ContentLayout } from "../../../styles/StyledComponents/Layout/Layout.styledComponent"
import {MyCard} from '../../../styles/StyledComponents/Cards/MyCard'
import { RegistrationForm } from "./RegistrationForm.component"
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {useHistory} from "react-router-dom";


export const Registration: React.FC = () => {
    const isAuth = useSelector(selectAuthUser)
    const history = useHistory()
    useEffect(()=>{
        if(isAuth && isAuth !== 'unauthorized')
        history.push('/profile')
    },[isAuth])
    return (
        <ContentLayout gridColumn='1fr 1fr 1fr' >
            <MyCard boxShadow={true} color='#EB3649' gridColumn='2' width='100%' alignSelf='center' height='100%' >
                <RegistrationForm/>
            </MyCard>
        </ContentLayout>

    )
}