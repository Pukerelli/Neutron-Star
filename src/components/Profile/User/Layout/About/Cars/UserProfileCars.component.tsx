import React from 'react';
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {UserCars} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {UserProfileCarCard} from './UserProfileCarCard.component';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {UserAboutCarsContainer} from "../../../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {useHistory} from "react-router-dom";

interface IProps {
    cars: Array<ICar>
    owner: string
}

export const UserProfileCars: React.FC<IProps> = ({cars, owner}) => {
    const history = useHistory()
    const onClick = () => history.push(`/profile/cars/garage/${owner}`)
    if (!cars?.length)
        return null

    return (
        <UserAboutCarsContainer>
            <CommonBtn hide={!(!!cars.length)} fz='1.4rem' width='100%' height='40px' onClick={onClick}>
                Garage {cars.length} {cars.length > 1 ? 'Cars' : 'car'}
            </CommonBtn>
            <UserCars>
                {cars.map((car, i) => <UserProfileCarCard car={car} key={car.id / i}/>)}
            </UserCars>
        </UserAboutCarsContainer>
    )
}

