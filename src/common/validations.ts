import * as Yup from "yup";

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



export const noteValidation = Yup.object({
    title: Yup.string()
        .min(5, 'must be 5-65 characters')
        .max(65, 'must be 5-65 characters')
        .required('Required field'),
    description: Yup.string()
        .min(5, 'must be 5-5000 characters')
        .max(5000, 'must be 5-5000 characters')
        .required('Required field'),
})

export const userInfoValidation = Yup.object({
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