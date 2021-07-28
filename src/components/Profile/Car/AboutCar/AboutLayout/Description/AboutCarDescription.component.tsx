import React from 'react';
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {AboutCarColumn} from "../../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {AboutCarDescriptionContainer, CarNameContainer} from "../../../../../../styles/StyledComponents/Cars/AboutCar/Description/CarDescription.styledComponents";
import {Name, Subtitle, Title} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";

export const AboutCarDescription: React.FC<{car: ICar}> = ({car}) => {
    return (
        <AboutCarColumn>
            <AboutCarDescriptionContainer>
                <CarNameContainer>
                    <Name underline={true}>{car.name}</Name>
                </CarNameContainer>
                <Title>Brand: </Title>
                <Subtitle>{car.brand}</Subtitle>
                <Title>Model: </Title>
                <Subtitle>{car.model}</Subtitle>
                <Title>Generation: </Title>
                <Subtitle>{car.generation ? car.generation : 'unknown'}</Subtitle>
                <Title>Year: </Title>
                <Subtitle>{car.year ? car.year : 'unknown'}</Subtitle>
                <Title>Engine: </Title>
                <Subtitle>{car.engine ? car.engine : 'unknown'}</Subtitle>
                <Title>HP: </Title>
                <Subtitle>{car.hp ? car.hp : 'unknown'}</Subtitle>
                <Title>Color: </Title>
                <Subtitle>{car.color ? car.color : 'unknown'}</Subtitle>
                <Title>Doors: </Title>
                <Subtitle>{car.doors ? car.doors : 'unknown'}</Subtitle>
                <Title>Rims: </Title>
                <Subtitle>{car.rims ? car.rims : 'unknown'}</Subtitle>
            </AboutCarDescriptionContainer>
        </AboutCarColumn>
    );
};

