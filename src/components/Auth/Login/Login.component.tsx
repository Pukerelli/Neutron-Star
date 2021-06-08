import React from 'react';
import { NavLink } from 'react-router-dom';
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";
import {ContentLayout} from "../../../styles/StyledComponents/Layout/Layout.styledComponent";
import { LoginForm } from './LoginForm.component';


export const Login: React.FC = () => {

    return (
        <ContentLayout gridColumn='1fr 1fr 1fr' >
            <MyCard boxShadow={true} color='#EB3649' gridColumn='2' width='100%' alignSelf='center' height='90%' >
                <LoginForm/>

                <NavLink to='/registration'>registration</NavLink>
            </MyCard>
        </ContentLayout>

    )
}
