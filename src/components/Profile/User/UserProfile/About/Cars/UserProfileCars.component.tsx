import React from 'react';
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {UserCars} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {UserProfileCarCard} from './UserProfileCarCard.component';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {UserAboutCarsContainer} from "../../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";

interface IProps {
    cars: Array<ICar>
}

export const UserProfileCars: React.FC<IProps> = ({cars}) => {

    if (!cars.length)
        return null

    return (
        <UserAboutCarsContainer>
            <CommonBtn fz='1.4rem' width='100%' height='40px'>
                Garage {cars.length} {cars.length > 1 ? 'Cars' : 'car'}
            </CommonBtn>
            <UserCars>
                {cars.map((car, i) => <UserProfileCarCard car={car} key={car.id / i}/>)}
            </UserCars>
        </UserAboutCarsContainer>
    )
}

