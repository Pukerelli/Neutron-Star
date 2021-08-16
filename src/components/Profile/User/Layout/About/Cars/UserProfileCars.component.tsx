import React from 'react';
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {UserCars} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {UserProfileCarCard} from './UserProfileCarCard.component';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {UserAboutCarsContainer} from "../../../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";

interface IProps {
    cars: Array<ICar>
    owner: string
    onGarageClick: () => void
    onCarClick: (car: string) => void
}

export const UserProfileCars: React.FC<IProps> = (props) => {
    if (!props.cars?.length)
        return null

    return (
        <UserAboutCarsContainer>
            <div>
                <CommonBtn hide={!(!!props.cars.length)} fz='1.4rem' width='100%'
                           height='40px' onClick={props.onGarageClick}>
                    Garage {props.cars.length} {props.cars.length > 1 ? 'Cars' : 'car'}
                </CommonBtn>
            </div>
            <UserCars>
                {props.cars.map(car => <UserProfileCarCard onCarClick={props.onCarClick}
                                                           car={car} key={car.id}/>)}
            </UserCars>
        </UserAboutCarsContainer>
    )
}

