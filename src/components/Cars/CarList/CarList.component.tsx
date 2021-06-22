import React, {useEffect, useState} from 'react';
import {CarMiniCard} from "../CarMiniCard/CarMiniCard.component";
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../selectors/Cars/Car.selector";
import {useAppDispatch} from "../../../store";
import {carList} from "../../../store/reducers/Cars/Car.slice";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import { CommonBtn } from '../../../styles/StyledComponents/Buttons/CommonButton.styledComponent';

export const CarList = () => {
    const dispatch = useAppDispatch()
    const allCars = useSelector(selectCars)
    const isFetching = useSelector(selectCarIsFetching)
    const auth = useSelector(selectAuthUser)
    const [value, setValue] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onSubmit = () => {
        dispatch(carList(value))
    }

    useEffect(() => {
        dispatch(carList(value))
    }, [])

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem', display: 'flex'}}>
                <input type="text" style={{width: '90%', height: '2rem'}} value={value} onChange={onChange}/>
                <CommonBtn height='2rem' position='static' cords='0, 0' width='10%' type='submit' onClick={onSubmit}>
                    search
                </CommonBtn>
            </div>
            <div>
            {allCars.map((car, index) =>
                car.owner === auth? null : <CarMiniCard key={index} car={car} isFetching={isFetching}/>)}
            </div>
        </div>
    );
};
