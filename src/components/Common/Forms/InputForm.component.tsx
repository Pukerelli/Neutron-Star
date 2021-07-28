import React from 'react';
import {useField} from "formik";
import {
    AuthInput,
    FieldContainer,
    LabelForm,
    ValidErrors
} from "../../../styles/StyledComponents/Auth/AuthLayout.styledComponents";

interface IProps {
    label: string
    name: string
    type: string
    placeholder: string
}

export const InputForm: React.FC<IProps> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <FieldContainer>
            <LabelForm htmlFor={props.name}>{label}</LabelForm>
            <AuthInput error={!!meta.error && meta.touched} {...field} {...props}/>
            <ValidErrors>{meta.touched && meta.error ?meta.error : null }</ValidErrors>
        </FieldContainer>
    );
};
