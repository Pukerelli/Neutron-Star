import React from 'react';
import {ICar} from '../../../../../common/interfaces/index.interface';
import {UserCars} from "../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import { UserProfileCarsLayout } from './UserProfileCarsLayout.component';

interface IProps {
    cars: Array<ICar>
}

export const UserProfileCars: React.FC<IProps> = ({cars}) => {
    return (
        <UserCars>
            {cars.map((car, i) => <UserProfileCarsLayout car={car} key={car.id / i}/>)}
        </UserCars>
    )
};

