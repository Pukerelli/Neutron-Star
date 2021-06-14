import React from 'react';
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";

interface IProps {
    car: ICar
}

export const CarMiniInfo: React.FC<IProps> = ({car}) => {
    return (
        <MyCard boxShadow={true} width='100%' minHeight='none' height='inherit' color='#EB3649' padding='0.6rem' >
            <h2>{car.name}</h2>
            <h3>
                {`${car.brand}  ${car.model}`}
            </h3>
            <p>
                {car.generation ? `gen: ${car.generation} ` : undefined}
                {car.engine ? `engine: ${car.engine} ` : undefined}
                {car.doors ? `${car.doors} doors` : undefined}
            </p>
        </MyCard>
    );
};
