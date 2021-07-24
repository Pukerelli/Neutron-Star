import React from 'react';
import {MyCard} from "../../../../../styles/StyledComponents/Cards/MyCard";
import {ICar} from "../../../../../common/interfaces/index.interface";

interface IProps {
    car: ICar
}

export const CarInfo: React.FC<IProps> = ({car}) => {

    return (
        <MyCard boxShadow={true} width='100%' height='100%' padding='0.5rem'
                color='#EB3649' position='relative'>
            <div>
                <h2>{car.name}</h2>
                <h3>{car.brand}</h3>
                <h4>{car.model}</h4>
                {car.generation ? <p>{car.generation}</p> : undefined}
                {car.year ? <p> year: {car.year}</p> : undefined}
                {car.doors ? <p>doors: {car.doors}</p> : undefined}
                {car.engine ? <p>engine: {car.engine}</p> : undefined}
                {car.hp ? <p>Horse Power: {car.hp}</p> : undefined}
                {car.rims ? <p>rims: {car.rims}</p> : undefined}
                {car.ownTime ? <p>Own time: {car.ownTime}</p> : undefined}
            </div>


        </MyCard>
    );
};
