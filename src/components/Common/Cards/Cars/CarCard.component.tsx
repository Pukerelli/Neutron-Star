import React from 'react';
import {ICar} from "../../../../common/interfaces/index.interface";
import {useHistory, useLocation} from "react-router-dom";
import {
    CarCardAvatar,
    CarCardAvatarSubtitle,
    CarCardButtonContainer,
    CarCardDescription,
    CarCardImgContainer,
    CarCardLayout
} from "../../../../styles/StyledComponents/Cards/Cars/CarCard.styledComponent";
import {TitleContainer} from "../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {
    ImgCommon,
    NameDouble,
    NameMini,
    Subtitle,
    Title
} from "../../../../styles/StyledComponents/Common/Common.styledComponents";
import carDefault from "../../../../common/images/carDefault.jpg";
import {CardButton} from "../../Buttons/CardButtons/CardButton.component";

export const CarCard: React.FC<{ car: ICar }> = ({car}) => {
    const history = useHistory()
    const location = useLocation()

    const onClick = () => {
        if (location.pathname.includes('note/add'))
            history.push(`/cars/add/note/${car.name}`)
        else
            history.push(`/cars/about/${car.name}`)
    }

    return (
        <CarCardLayout>
            <CarCardDescription>
                <TitleContainer onClick={onClick}>
                    <NameMini>{car.name}</NameMini>
                    <NameDouble>{car.brand} {car.model}</NameDouble>
                </TitleContainer>
                <Title>Gen:</Title>
                <Subtitle>{car.generation || 'unknown'}</Subtitle>
                <Title>Year:</Title>
                <Subtitle>{car.year || 'unknown'}</Subtitle>
                <Title>Engine:</Title>
                <Subtitle>{car.engine || 'unknown'}</Subtitle>
                <Title>HP:</Title>
                <Subtitle>{car.engine || 'unknown'}</Subtitle>
                <Title>Owner:</Title>
                <Subtitle>{car.owner}</Subtitle>
            </CarCardDescription>
            <CarCardAvatar>
                <CarCardImgContainer>
                    <ImgCommon
                        src={car.photo || carDefault}/>
                </CarCardImgContainer>
                <CarCardAvatarSubtitle>
                    <Title>Mileage:</Title>
                    <Subtitle>{car.mileage || 'unknown'}</Subtitle>
                    <CarCardButtonContainer>
                        <CardButton followedBy={car.followedBy} payload={car.name}
                                    card={'car'} owner={car.owner}/>
                    </CarCardButtonContainer>
                </CarCardAvatarSubtitle>
            </CarCardAvatar>
        </CarCardLayout>
    );
};