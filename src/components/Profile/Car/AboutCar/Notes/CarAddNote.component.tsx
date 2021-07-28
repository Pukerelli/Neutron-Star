import React, {useEffect} from 'react';
import {MyCard} from '../../../../../styles/StyledComponents/Cards/MyCard';
import {useAppDispatch} from "../../../../../store";
import date from 'date-and-time';
import {Field, Form, Formik} from "formik";
import {carCurrentAction, carNotePushAction} from "../../../../../store/actions/car.action";
import {useSelector} from "react-redux";
import {selectCarError, selectCurrentCar} from "../../../../../selectors/cars/car.selector";
import {SelectCar} from "../../SelectCar/SelectCar.component";
import {useHistory, useParams} from "react-router-dom";
import {noteValidation} from '../../../../../common/validations';


export const CarAddNote: React.FC = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const {carname} = useParams<{ carname: string }>()

    useEffect(() => {
        if(carname)
        dispatch(carCurrentAction(carname))
    },[carname])

    const car = useSelector(selectCurrentCar)
    const error = useSelector(selectCarError)

    const initialValues = {
        title: '',
        description: '',
    }

    const onSubmit =  (values: typeof initialValues) => {
        const now = date.format(new Date(), 'MMM DD YYYY')
        dispatch(carNotePushAction({...values, date: now, _id: car._id}))
        history.push(`/profile/cars/about/${carname}`)
    }

    if(!carname || error){
        return <SelectCar/>
    }

    return (
        <MyCard boxShadow={true} width='35vw' height='65vh' color='#EB3649' >
            <Formik
                initialValues={initialValues}
                validationSchema={noteValidation}
                onSubmit={onSubmit}
            >
                <Form >
                    <div>
                        <label htmlFor="title">title</label>
                        <Field name="title" type="text" placeholder='enter title'/>
                    </div>
                    <div>
                        <label htmlFor="description">description</label>
                        <Field name="description" as='textarea'   placeholder='enter description'/>
                    </div>
                    <button type="submit" >add</button>
                </Form>
            </Formik>
        </MyCard>
    );
};



