import {Form, Formik} from 'formik';
import React from 'react';
import {noteValidation} from '../../../../../common/validations';
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import {InputForm, TextAreaForm} from '../../../../Common/Forms/Forms.component';
import {
    NoteFormFieldsContainer,
    NoteFormLayout
} from "../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import {ICurrentNote} from "../../../../../common/interfaces/index.interface";

interface IProps {
    note?: ICurrentNote
    onSubmit: (values: { title: string, description: string }) => void
}

export const NoteForm: React.FC<IProps> = ({note, onSubmit}) => {
    const initialValues = {
        title: note?.title || '',
        description: note?.description || ''
    }
    return (
        <NoteFormLayout>
            <Formik initialValues={initialValues} validationSchema={noteValidation}
                    onSubmit={onSubmit}>
                <Form>
                    <NoteFormFieldsContainer>
                        <InputForm type='text' name='title' placeholder='Title' label='Title'/>
                        <TextAreaForm type='textarea' name='description' placeholder='Enter your note'
                                      label='Description'/>
                        <CommonBtn type='submit' width='100%' height='40px'>Confirm</CommonBtn>
                    </NoteFormFieldsContainer>
                </Form>
            </Formik>
        </NoteFormLayout>
    );
};
