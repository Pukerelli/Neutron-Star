import React from 'react';
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {AboutCarColumn} from "../../../../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {
    AboutCarDescriptionContainer,
    CarNameContainer
} from "../../../../../../styles/StyledComponents/Cars/AboutCar/Description/CarDescription.styledComponents";
import {Name, Subtitle, Title} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {EditBtn} from "../../../../../Common/Edit/EditBtn.component";

interface IProps {
    car: ICar
    edit: boolean
    toggle: () => void
    auth: string
}

export const AboutCarDescription: React.FC<IProps> = ({car, edit, auth, toggle}) => {
    return (
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
