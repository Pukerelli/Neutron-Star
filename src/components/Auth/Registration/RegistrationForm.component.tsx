import {Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {InputForm} from "../../Common/Forms/InputForm.component";
import {IError} from "../../../common/interfaces/index.interface";
import {
    AuthCard,
    AuthError,
    ButtonContainer,
    RegistrationFormLayout
} from '../../../styles/StyledComponents/Auth/AuthLayout.styledComponents';
import {Name} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {CommonBtn} from '../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {NoteBtnBack} from "../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";

interface IProps {
    onSubmit: (values: { username: string, password: string, email: string }) => void
    onLoginClick: () => void
    errors: IError
}

export const RegistrationForm: React.FC<IProps> = ({onSubmit, onLoginClick, errors}) => {

    const initialValues = {
        username: '',
        password: '',
        repeatPassword: '',
        email: ''
    }
    const validation = Yup.object({
        username: Yup.string()
            .min(4, 'Username must be 4-10 characters')
            .max(10, 'Username must be 4-10 characters')
            .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
            .required('Username is required'),
        email: Yup.string()
            .email('invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be 6-15 characters')
            .max(15, 'Password must be 6-15 characters')
            .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
            .required('Password is required'),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('confirm password')
    })
    return (
        <AuthCard error={'string' === typeof errors}>
            <Name underline={true} textAlign='center'>Registration</Name>
            {errors ? 'string' === typeof errors ? <AuthError>{errors}</AuthError> : 'try again' : <div/>}
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
                <Form>
                    <RegistrationFormLayout>
                        <InputForm label='username' name='username' type='text' placeholder='Choose username'/>
                        <InputForm label='email' name='email' type='email' placeholder='enter your email'/>
                        <InputForm label='password' name='password' type='password' placeholder='enter password'/>
                        <InputForm label='Repeat password' name='repeatPassword' type='password'
                                   placeholder='enter password'/>
                        <ButtonContainer>
                            <CommonBtn width='100%' height='2rem' type="submit">Confirm</CommonBtn>
                        </ButtonContainer>
                    </RegistrationFormLayout>
                </Form>
            </Formik>
            <NoteBtnBack onClick={onLoginClick}>
                <ArrowBackIcon fontSize='large'/>
            </NoteBtnBack>
        </AuthCard>
    );
}

