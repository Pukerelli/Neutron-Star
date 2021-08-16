import React from "react";
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
    CarImg,
    CarImgContainer,
    TitleContainer,
    UserCarCard
} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {
    ImgCommon,
    NameDouble,
    NameMini,
    Subtitle,
    Title
} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import carDefault from "../../../../../../common/images/carDefault.jpg"

interface IProps {
    car: ICar
    onCarClick: (car: string) => void
}

export const UserProfileCarCard: React.FC<IProps> = ({car, onCarClick}) => (
    <>
        <UserCarCard onClick={() => onCarClick(car.name)}>
            <TitleContainer>
                <NameMini>{car.name}</NameMini>
                <NameDouble>{car.brand} {car.model}</NameDouble>
            </TitleContainer>
            <Title>Gen:</Title>
            <Subtitle>{car.generation || 'unknown'}</Subtitle>
            <Title>Year:</Title>
            <Subtitle>{car.year || 'unknown'}</Subtitle>
            <Title>Color:</Title>
            <Subtitle>{car.color || 'unknown'}</Subtitle>
            <Title>Mileage:</Title>
            <Subtitle>{car.mileage || 'unknown'}</Subtitle>
        </UserCarCard>
        <CarImgContainer onClick={() => onCarClick(car.name)}>
            <CarImg
                src={car.photo || carDefault}/>
        </CarImgContainer>
    </>
)


