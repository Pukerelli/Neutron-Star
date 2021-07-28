import React from 'react';
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
    AboutCarAvatarColumn,
    AboutCarAvatarContainer,
    AboutCarAvatarSubtitle
} from "../../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {ImgCommon} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {carDefaultImage} from "../../../../../../common/images/images";
import {AvatarSubtitle} from "../../../../../../styles/StyledComponents/Cars/AboutCar/Description/AvatarSubtitle.styledComponents";
import {Subtitle, Title} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";

export const CarAvatar: React.FC<{car: ICar}> = ({car}) => {
    return (
        <AboutCarAvatarColumn>
            <AboutCarAvatarContainer>
                <ImgCommon src={car.photo ? car.photo : carDefaultImage}/>
            </AboutCarAvatarContainer>
            <AboutCarAvatarSubtitle>
                <AvatarSubtitle>
                    <Title>Location: </Title>
                    <Subtitle>{car.address? car.address.city: 'unknown'}</Subtitle>
                    <Title>Owner: </Title>
                    <Subtitle>{car.owner}</Subtitle>
                    <Title>Mileage: </Title>
                    <Subtitle>{car.mileage ? car.mileage : 'unknown'}</Subtitle>
                </AvatarSubtitle>
            </AboutCarAvatarSubtitle>
        </AboutCarAvatarColumn>
    );
};

