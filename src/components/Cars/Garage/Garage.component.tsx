import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCars} from "../../../selectors/Cars/Car.selector";
import {useAppDispatch} from "../../../store";
import {CarMiniCard} from "../CarMiniCard/CarMiniCard.component";
import {GridLayout} from '../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {useParams} from "react-router-dom";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {CommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {AddCar} from '../addCar/AddCar.component';
import {carGarageAction} from "../../../store/actions/car.action";


export const Garage: React.FC = () => {
        const [addCar, setAddCar] = useState(false)
        const dispatch = useAppDispatch()
        const allCars = useSelector(selectCars)
        const isFetching = useSelector(selectCarIsFetching)
        const {username} = useParams<{ username: string }>()
        const auth = useSelector(selectAuthUser)

        const onClick = () => {
            setAddCar(!addCar)
        }

        useEffect(() => {
            if (username) {
                dispatch(carGarageAction(username))
                return
            }
            if (!username && auth !== 'unauthorized') {
                dispatch(carGarageAction(auth!))
                return
            }
        }, [username, auth])


        if (addCar) {
            return (
                <GridLayout width='100%' gridColumns='1fr 1fr 1fr' gridGap='1rem'>
                    <AddCar/>
                    <CommonBtn height='2rem' width='10%' top='85%' color='#EB3649' onClick={onClick}>
                        {addCar ? 'cancel' : 'add car'}
                    </CommonBtn>
                </GridLayout>
            )
        }
        return (
            <>
                <div style={{marginBottom: '1rem', height: '2rem'}}>
                    {
                        auth === username
                            ? <CommonBtn height='2rem' width='10%' cords='0, 0' margin='0 auto' position='static' top='0'
                                         color='#EB3649' onClick={onClick}>
                                {addCar ? 'cancel' : 'add car'}
                            </CommonBtn>
                            : null
                    }
                </div>
                <GridLayout width='80%' margin='0 auto' align='start'>
                    {allCars.map((car, index) => <CarMiniCard key={index} car={car} isFetching={isFetching}/>)}
                </GridLayout>
            </>
        );
    }
;

