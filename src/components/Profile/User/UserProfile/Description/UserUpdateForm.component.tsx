import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useAppDispatch} from "../../../../../store";
import {IUser} from "../../../../../common/interfaces/index.interface";
import {userUpdateAction} from "../../../../../store/actions/user.action";


const validation = Yup.object({
    fullName: Yup.string()
        .min(3, 'must be more than 4 characters')
        .max(30, 'must be 4 characters or less'),
    age: Yup.string()
        .min(2, 'enter correct age')
        .max(2, 'are you sure?'),
    Country: Yup.string()
        .min(3, 'enter existing or not country')
        .max(15, 'are you sure?'),
    City: Yup.string()
        .min(2, 'enter existing or not city')
        .max(15, 'are you sure?'),
    interests: Yup.string()
        .min(2, 'i dont think so')
        .max(50, 'sorry, but you have so many interest'),
    about: Yup.string()
        .min(2, 'tell me something about you')
        .max(100, 'hm, can you write this a little bit short'),

})

interface IProps {
    toggleEdit: () => void
    user: IUser
}

export const UserUpdateForm: React.FC<IProps> = ({toggleEdit, user}) => {
    const initialValues = {
        fullName: user.fullName || '',
        country: user.address?.country || '',
        city: user.address?.city || '',
        age: user.age || '',
        about: user.about || '',
    }
    const dispatch = useAppDispatch()
    const onSubmit = async (values: typeof initialValues) => {
        await dispatch(userUpdateAction(values))
        toggleEdit()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="fullName">Name</label>
                    <Field name="fullName" type="text" placeHolder='enter your name'/>
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <Field name="age" type="text" placeHolder='enter your age'/>
                </div>
                <div>
                    <label htmlFor="country">country</label>
                    <Field name="country" type="text" placeHolder='enter your country'/>
                </div>
                <div>
                    <label htmlFor="city">city</label>
                    <Field name="city" type="text" placeHolder='enter your city'/>
                </div>
                <div>
                    <label htmlFor="about">about</label>
                    <Field name="about" type='text' placeHolder='enter your age'/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
