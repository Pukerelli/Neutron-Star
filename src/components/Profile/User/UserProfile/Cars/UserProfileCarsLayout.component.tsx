import React from "react";
import {ICar} from "../../../../../common/interfaces/index.interface";
import {
    CarImgContainer,
    CarTitleContainer,
    UserCarCard
} from "../../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {NameMini, Subtitle, Title} from "../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {ImgProfileCar} from "../../../../../styles/StyledComponents/Images/ImgSimple.styledComponent";

export const UserProfileCarsLayout: React.FC<{ car: ICar }> = ({car}) => {
    return (
        <>
            <UserCarCard>
                <CarTitleContainer>
                    <NameMini>Nikola1917</NameMini>
                    <NameMini>Tesla Model X</NameMini>
                </CarTitleContainer>
                <Title>Gen:</Title>
                <Subtitle>new</Subtitle>
                <Title>Year:</Title>
                <Subtitle>2017</Subtitle>
            </UserCarCard>
            <CarImgContainer>
                <ImgProfileCar
                    src='https://s.auto.drom.ru/i24207/c/photos/fullsize/nissan/laurel/nissan_laurel_697209.jpg'/>
            </CarImgContainer>
        </>
    )
}
