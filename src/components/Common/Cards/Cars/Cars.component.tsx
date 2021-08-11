import React from 'react';
import {ICar} from "../../../../common/interfaces/index.interface";
import {CarCard} from "./CarCard.component";

export const Cars: React.FC<{ cars: Array<ICar> }> = ({cars}) => (
        <>
            {cars.map((car) => <CarCard key={car.id} car={car}/> )}
        </>
    )
