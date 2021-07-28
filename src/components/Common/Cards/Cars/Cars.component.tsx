import React from 'react';
import {ICar} from "../../../../common/interfaces/index.interface";
import {CarCard} from "./CarCard.component";

export const Cars: React.FC<{ cars: Array<ICar> }> = ({cars}) => {
    return (
        <>
            {cars.map((car, i) => <CarCard key={car.id / i} car={car}/> )}
        </>
    )
}
