import React from 'react';
import {IUser} from '../../../../../../../../common/interfaces/index.interface';
import {IUpdateUser} from "../../../../../../../../API/user.api";
import * as Yup from "yup"
import {phoneRegExp} from "../../../../../../../../common/validations";
import {Form, Formik} from 'formik';
import {InputForm} from "../../../../../../../Common/Forms/InputForm.component";
import {UserEditFormContainer} from "../../../../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import { CommonBtn } from '../../../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';

interface IProps {
    user: IUser
    onSubmit: (values: IUpdateUser) => void
}

export const UserEditForm: React.FC<IProps> = ({user, onSubmit}) => {
    const initialValues = {
        fullName: user.fullName || '',
        age: user.age || '',
        drivingExperience: user.drivingExperience || '',
        country: user.address?.country || '',
        city: user.address?.city || '',
        whatsapp: user.contacts?.whatsapp || '',
        telegram: user.contacts?.telegram || ''
    }
    const validation = Yup.object({
        fullName: Yup.string()
            .matches(/^([\w]{2,})+\s+([\w\s]{2,})+$/, "Only letters")
            .min(2, 'must be 2-15 characters')
            .max(15, 'must be 2-15 characters'),
        age: Yup.string()
            .length(2, 'enter correct age'),

        drivingExperience: Yup.string()
            .matches(/^\d+$/, "enter correct number")
            .min(1, 'must be 1-2 characters')
            .max(2, 'must be 1-2 characters'),
        country: Yup.string()
            .matches(/^[aA-zZ]+$/, "Only letters")
            .min(2, 'must be 2-15 characters')
            .max(15, 'must be 2-15 characters'),
        city: Yup.string()
            .matches(/^[aA-zZ/-]+$/, "Only letters")
            .min(2, 'must be 2-20 characters')
            .max(20, 'must be 2-20 characters'),
        whatsapp: Yup.string()
            .length(11,'number is no valid')
            .matches(phoneRegExp, 'number is no valid'),
        telegram: Yup.string()
            .min(2, 'must be 3-15 characters')
            .max(15, 'must be 3-15 characters')
            .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")

    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
                <Form>
                    <UserEditFormContainer>
                        <InputForm label='Name' name='fullName' type='text' placeholder='Name'/>
                        <InputForm label='Age' name='age' type='text' placeholder='Age'/>
                        <InputForm label='Country' name='country' type='text' placeholder='Country'/>
                        <InputForm label='City' name='city' type='text' placeholder='City'/>
                        <InputForm label='Drive Exp.' name='drivingExperience' type='text' placeholder='Drive Exp.'/>
                        <InputForm label='Whatsapp' name='whatsapp' type='text' placeholder='1XXXXXXXXXX'/>
                        <InputForm label='Telegram' name='telegram' type='text' placeholder='without @'/>
                        <CommonBtn width='100%' height='40px' type='submit'>Confirm</CommonBtn>
                    </UserEditFormContainer>
                </Form>
            </Formik>
        </div>
    );
};

