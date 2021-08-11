import React from 'react';
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {
    AboutCarColumn, AboutCarDescriptionContainer,
    CarNameContainer
} from "../../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {Name, Subtitle, Title} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {EditBtn} from "../../../../../Common/Buttons/Edit/EditBtn.component";

interface IProps {
    car: ICar
    edit: boolean
    toggle: () => void
    auth: string
}

export const AboutCarDescription: React.FC<IProps> = ({car, edit, auth, toggle}) => (
    <AboutCarColumn>
        <AboutCarDescriptionContainer>
            <CarNameContainer>
                <Name underline={true}>{car.name}</Name>
            </CarNameContainer>
            <EditBtn toggle={toggle} edit={edit} display={auth === car.owner}/>
            <Title>Brand: </Title>
            <Subtitle>{car.brand}</Subtitle>
            <Title>Model: </Title>
            <Subtitle>{car.model}</Subtitle>
            <Title>Generation: </Title>
            <Subtitle>{car.generation || 'unknown'}</Subtitle>
            <Title>Year: </Title>
            <Subtitle>{car.year || 'unknown'}</Subtitle>
            <Title>Engine: </Title>
            <Subtitle>{car.engine || 'unknown'}</Subtitle>
            <Title>HP: </Title>
            <Subtitle>{car.hp || 'unknown'}</Subtitle>
            <Title>Color: </Title>
            <Subtitle>{car.color || 'unknown'}</Subtitle>
            <Title>Doors: </Title>
            <Subtitle>{car.doors || 'unknown'}</Subtitle>
            <Title>Rims: </Title>
            <Subtitle>{car.rims || 'unknown'}</Subtitle>
        </AboutCarDescriptionContainer>
    </AboutCarColumn>
)

