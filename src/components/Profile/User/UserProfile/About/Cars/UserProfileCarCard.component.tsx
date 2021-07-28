import React from "react";
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
    CarImgContainer,
    TitleContainer,
    ImgCommon,
    UserCarCard
} from "../../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {
    NameDouble,
    NameMini,
    Subtitle,
    Title
} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {useHistory} from "react-router-dom";

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
                <Subtitle>{car.generation}</Subtitle>
                <Title>Year:</Title>
                <Subtitle>{car.year}</Subtitle>
            </UserCarCard>
            <CarImgContainer>
                <ImgCommon
                    src='https://s.auto.drom.ru/i24207/c/photos/fullsize/nissan/laurel/nissan_laurel_697209.jpg'/>
            </CarImgContainer>
        </>
    )
}


