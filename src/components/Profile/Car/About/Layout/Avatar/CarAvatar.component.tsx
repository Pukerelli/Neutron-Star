import React from 'react';
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
    AboutCarAvatarColumn,
    AboutCarAvatarContainer,
    AboutCarAvatarSubtitle,
    AvatarSubtitle
} from "../../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import carDefault from "../../../../../../common/images/carDefault.jpg";
import {ImgCommon, Subtitle, Title} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";

interface IProps {
    car: ICar
    onOwnerClick: () => void

}

export const CarAvatar: React.FC<IProps> = ({car, onOwnerClick}) => (
    <AboutCarAvatarColumn>
        <AboutCarAvatarContainer>
            <ImgCommon src={car.photo ? car.photo : carDefault}/>
        </AboutCarAvatarContainer>
        <AboutCarAvatarSubtitle>
            <AvatarSubtitle>
                <Title>Location: </Title>
                <Subtitle>{car.address?.city || 'unknown'}</Subtitle>
                <Title>Owner: </Title>
                <Subtitle style={{cursor: 'pointer'}}
                          onClick={onOwnerClick}>{car.owner}</Subtitle>
                <Title>Mileage: </Title>
                <Subtitle>{car.mileage ? car.mileage : 'unknown'}</Subtitle>
            </AvatarSubtitle>
        </AboutCarAvatarSubtitle>
    </AboutCarAvatarColumn>
)

