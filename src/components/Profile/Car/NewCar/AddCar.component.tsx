import React, {useState} from 'react';
import {AddCarForm} from "./AddCarForm.component";
import {UpdateCarPhoto} from "./UpdateCarPhoto.component";
import {UpdateCarInfo} from "./UpdateCarInfo.component";
import {useSelector} from "react-redux";
import {selectCarName, selectCurrentCar} from "../../../../selectors/cars/car.selector";
import {CarInfo} from "../AboutCar/CarInfo/CarInfo.component";

export const AddCar: React.FC = () => {
    const carName = useSelector(selectCarName)
    const [isFinished, setFinished] = useState(false)
    const car = useSelector(selectCurrentCar)


    return (
        <>
            {isFinished ? <CarInfo car={car}/> : <AddCarForm setFinished={setFinished}/>}
            {isFinished ? <UpdateCarPhoto carName={carName} /> : undefined}
            {isFinished ? <UpdateCarInfo  carName={carName} car={car}/> : undefined}
        </>
    );
};
