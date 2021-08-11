import React from "react";
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
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
import {useHistory} from "react-router-dom";
import carDefault from "../../../../../../common/images/carDefault.jpg"

interface IProps {
    car: ICar
}

export const UserProfileCarCard: React.FC<IProps> = ({car}) => {
    const history = useHistory()
    const onClick = (car: string) => {
        history.push(`/profile/cars/about/${car}`)
    }
    return (
        <>
            <UserCarCard onClick={() => onClick(car.name)}>
                <TitleContainer>
                    <NameMini>{car.name}</NameMini>
                    <NameDouble>{car.brand} {car.model}</NameDouble>
                </TitleContainer>
                <Title>Gen:</Title>
                <Subtitle>{car.generation || 'unknown'}</Subtitle>
                <Title>Year:</Title>
                <Subtitle>{car.year || 'unknown'}</Subtitle>
            </UserCarCard>
            <CarImgContainer>
                <ImgCommon
                    src={car.photo || carDefault}/>
            </CarImgContainer>
        </>
    )
}


