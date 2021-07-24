import React from 'react';
import {MyCard} from "../../../../../styles/StyledComponents/Cards/MyCard";
import {ICar} from "../../../../../common/interfaces/index.interface";

interface IProps {
    car: ICar
}

export const CarMiniInfo: React.FC<IProps> = ({car}) => {
    return (
        <MyCard boxShadow={true} width='100%' minHeight='none' height='inherit' color='#EB3649' display='flex' padding='0.6rem' >
            <div style={{ width: '30%'}}>
                <h2>{car.name}</h2>
                <h3>owner: {car.owner}</h3>
                <h4>
                    {`${car.brand}  ${car.model}`}
                </h4>
            </div>
            <div style={{fontSize: '20px'}}>
                <p>{car.generation ? `gen: ${car.generation} ` : undefined}</p>
                <p>{car.engine ? `engine: ${car.engine} ` : undefined}</p>
                <p>{car.doors ? `${car.doors} doors` : undefined}</p>
            </div>

        </MyCard>
    );
};
