import React from 'react';
import {IUser} from '../../../../../../../../common/interfaces/index.interface';
import {IUpdateUser} from "../../../../../../../../API/user.api";
import {userInfoValidation} from "../../../../../../../../common/validations";
import {Form, Formik} from 'formik';
import {InputForm} from "../../../../../../../Common/Forms/Forms.component";
import {UserEditFormContainer} from "../../../../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import {CommonBtn} from '../../../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';

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

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={userInfoValidation} onSubmit={onSubmit}>
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

