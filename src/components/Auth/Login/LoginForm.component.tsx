import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {InputForm} from "../../Common/Forms/Forms.component";
import {IError} from "../../../common/interfaces/index.interface";
import {AuthCard, AuthError, LoginFormLayout} from '../../../styles/StyledComponents/Auth/AuthLayout.styledComponents';
import {Name} from '../../../styles/StyledComponents/Common/Common.styledComponents';
import {CommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";

interface IProps {
    onSubmit: (values: { username: string, password: string }) => void
    onRegClick: () => void
    errors: IError

}

export const LoginForm: React.FC<IProps> = ({onSubmit, onRegClick, errors}) => {

    const initialValues = {
        username: '',
        password: ''
    }
    const validation = Yup.object({
        username: Yup.string()
            .min(4, 'Username must be 4-10 characters')
            .max(10, 'Username must be 4-10 characters')
            .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
            .required('Username is required'),
        password: Yup.string()
            .min(6, 'Password must be 6-15 characters')
            .max(15, 'Password must be 6-15 characters')
            .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
            .required('Password is required'),
    })
    return (
        <AuthCard error={'string' === typeof errors}>
            <Name underline={true} textAlign='center'>Log in</Name>
            {errors ? 'string' === typeof errors ? <AuthError>{errors}</AuthError> : 'try again' : <div/>}
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
                <Form>
                    <LoginFormLayout>
                        <InputForm type='text' name='username' label='username' placeholder='enter your username'/>
                        <InputForm type='password' name='password' label='password' placeholder='enter your password'/>
                        <CommonBtn width='100%' height='2rem' type="submit">Confirm</CommonBtn>
                    </LoginFormLayout>
                </Form>
            </Formik>
            <CommonBtn display={true} margin='0 auto' width='60%' height='2rem' onClick={onRegClick}>
                Registration
            </CommonBtn>
        </AuthCard>
    );
};

