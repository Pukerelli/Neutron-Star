import React from 'react';
import {useField} from "formik";
import {
    FieldAreaContainer,
    FieldInputContainer, InputArea,
    InputText,
    LabelForm,
    ValidErrors
} from '../../../styles/StyledComponents/Common/Forms.styledComponent';


interface IProps {
    label: string
    name: string
    type: string
    placeholder: string
}

export const InputForm: React.FC<IProps> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <FieldInputContainer>
            <LabelForm htmlFor={props.name}>{label}</LabelForm>
            <InputText error={!!meta.error && meta.touched} {...field} {...props}/>
            <ValidErrors>{meta.touched && meta.error ?meta.error : null }</ValidErrors>
        </FieldInputContainer>
    );
};

export const TextAreaForm: React.FC<IProps> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <FieldAreaContainer>
            <LabelForm htmlFor={props.name}>{label}</LabelForm>
            <InputArea error={!!meta.error && meta.touched} {...field} {...props}/>
            <ValidErrors>{meta.touched && meta.error ?meta.error : null }</ValidErrors>
        </FieldAreaContainer>
    );
};
