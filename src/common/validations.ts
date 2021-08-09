import * as Yup from "yup";

export const registrationValidation = Yup.object({
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

export const loginValidation = Yup.object({
    username: Yup.string()
        .min(4, 'Username must be 4-10 characters')
        .max(10, 'Username must be 4-10 characters')
        .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
        .required('Username is required'),
    password: Yup.string()
        .min(6, 'Password must be 6-15 characters')
        .max(15, 'Password must be 6-15 characters')
        .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
        .required('Password is required'),
})

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
        .matches(/^[aA-zZ\s]+$/, "Only letters")
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
        .matches(/^[0-9]+$/, 'Only numbers'),
    telegram: Yup.string()
        .min(2, 'must be 3-15 characters')
        .max(15, 'must be 3-15 characters')
        .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")

})

export const addCarValidation = Yup.object({
    name: Yup.string()
        .min(3, 'must be 3-10 characters')
        .max(10, 'must be 3-10 characters')
        .matches(/^[aA-zZ\d]+$/, "Only letters and numbers")
        .required('this field is required'),
    brand: Yup.string()
        .min(3, 'must be 3-15 characters')
        .max(15, 'must be 3-15 characters')
        .matches(/^[aA-zZ/-]+$/, "Only letters")
        .required('this field is required'),
    model: Yup.string()
        .min(3, 'must be 3-15 characters')
        .max(15, 'must be 3-15 characters')
        .matches(/^[aA-zZ\d\s/-]+$/, "Only letters and number")
        .required('this field is required'),
    generation: Yup.string()
        .min(1, 'must be 3-15 characters')
        .max(15, 'must be 3-15 characters')
        .matches(/^[aA-zZ\d\s]+$/, "Only letters and numbers"),
    year: Yup.string()
        .length(4, 'enter correct year')
        .matches(/\d+$/, "Only numbers"),
    engine: Yup.string()
        .min(3, 'must be 3-10 characters')
        .max(10, 'must be 3-10 characters')
        .matches(/^[aA-zZ\d]+$/, "Only letters and numbers"),
    hp: Yup.string()
        .min(2, 'so slowly?')
        .max(4, 'so fast?')
        .matches(/\d+$/, "Only numbers"),
    doors: Yup.string()
        .length(1, 'it\'s a bus?')
        .matches(/\d+$/, "Only numbers"),
    mileage: Yup.string()
        .min(1, 'must be 1-7 characters')
        .max(7, 'must be 1-7 characters')
        .matches(/\d+$/, "Only numbers"),
    ownTime: Yup.string()
        .min(1, 'at least 1 character')
        .max(2, 'i don\'t think so')
        .matches(/\d+$/, "Only numbers"),
    country: Yup.string()
        .min(1, 'must be 1-20 characters')
        .max(20, 'must be 1-20 characters')
        .matches(/^[aA-zZ/-]+$/, "Only letters"),
    city: Yup.string()
        .min(1, 'must be 1-20 characters')
        .max(20, 'must be 1-20 characters')
        .matches(/^[aA-zZ/-]+$/, "Only letters"),
    color: Yup.string()
        .min(1, 'must be 1-15 characters')
        .max(15, 'must be 1-15 characters')
        .matches(/^[aA-zZ]+$/, "Only letters"),
    rims: Yup.string()
        .min(3, 'must be 3-20 characters')
        .max(20, 'must be 3-20 characters')
        .matches(/^[aA-zZ\d\s/-]+$/, "Only letters and numbers")
})
