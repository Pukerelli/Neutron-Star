import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectCarName, selectCurrentCar} from "../../../../selectors/cars/car.selector";

export const AddCar: React.FC = () => {
    const carName = useSelector(selectCarName)
    const [isFinished, setFinished] = useState(false)
    const car = useSelector(selectCurrentCar)


    return (
        <div>add car</div>
    );
};
