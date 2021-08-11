import {Form, Formik} from 'formik';
import React from 'react';
import {InputForm} from "../../Common/Forms/Forms.component";
import {IError} from "../../../common/interfaces/index.interface";
import {
    AuthCard,
    AuthError,
    AuthLayout,
    RegistrationButtonContainer,
    RegistrationFormLayout
} from '../../../styles/StyledComponents/Auth/AuthLayout.styledComponents';
import {Name} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {CommonBtn} from '../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {NoteBtnBack} from "../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import {registrationValidation} from '../../../common/validations';

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
    return (
        <AuthLayout>
            <AuthCard error={'string' === typeof errors}>
                <Name underline={true} textAlign='center'>Registration</Name>
                {errors ? 'string' === typeof errors ? <AuthError>{errors}</AuthError> : 'try again' : <div/>}
                <Formik initialValues={initialValues} validationSchema={registrationValidation} onSubmit={onSubmit}>
                    <Form>
                        <RegistrationFormLayout>
                            <InputForm label='username' name='username' type='text' placeholder='Choose username'/>
                            <InputForm label='email' name='email' type='email' placeholder='enter your email'/>
                            <InputForm label='password' name='password' type='password' placeholder='enter password'/>
                            <InputForm label='Repeat password' name='repeatPassword' type='password'
                                       placeholder='enter password'/>
                            <RegistrationButtonContainer>
                                <CommonBtn width='100%' height='2rem' type="submit">Confirm</CommonBtn>
                            </RegistrationButtonContainer>
                        </RegistrationFormLayout>
                    </Form>
                </Formik>
                <NoteBtnBack onClick={onLoginClick}>
                    <ArrowBackIcon fontSize='large'/>
                </NoteBtnBack>
            </AuthCard>
        </AuthLayout>
    );
}

