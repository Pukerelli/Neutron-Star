import {Form, Formik} from 'formik';
import React from 'react';
import {InputForm} from "../../Common/Forms/Forms.component";
import {IError} from "../../../common/interfaces/index.interface";
import {
    AuthCard,
    AuthError,
    AuthLayout,
    LoginFormLayout
} from '../../../styles/StyledComponents/Auth/AuthLayout.styledComponents';
import {Name} from '../../../styles/StyledComponents/Common/Common.styledComponents';
import {CommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {loginValidation} from "../../../common/validations";
import {ILogin} from "../../../API/auth.api";

interface IProps {
    onSubmit: (values: ILogin) => void
    onRegClick: () => void
    errors: IError

}

export const LoginForm: React.FC<IProps> = ({onSubmit, onRegClick, errors}) => {

    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <AuthLayout>
            <AuthCard error={'string' === typeof errors}>
                <Name underline={true} textAlign='center'>Log in</Name>
                {errors ? 'string' === typeof errors ? <AuthError>{errors}</AuthError> : 'try again' : <div/>}
                <Formik initialValues={initialValues} validationSchema={loginValidation} onSubmit={onSubmit}>
                    <Form>
                        <LoginFormLayout>
                            <InputForm type='text' name='username' label='username' placeholder='enter your username'/>
                            <InputForm type='password' name='password' label='password'
                                       placeholder='enter your password'/>
                            <CommonBtn width='100%' height='2rem' type="submit">Confirm</CommonBtn>
                        </LoginFormLayout>
                    </Form>
                </Formik>
                <CommonBtn margin='0 auto' width='60%' height='2rem' onClick={onRegClick}>
                    Registration
                </CommonBtn>
            </AuthCard>
        </AuthLayout>
    );
};

