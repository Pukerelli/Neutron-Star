import React from 'react';
import {MyCard} from "../../../../../styles/StyledComponents/Cards/MyCard";
import {ICar} from "../../../../../common/interfaces/common-interfaces/index.interface";
import style from './carInfo.module.css'

interface IProps{
    car: ICar
}

export const CarInfo: React.FC<IProps> = ({car}) => {

    return (
        <MyCard boxShadow={true} width='100%' height='100%' padding='0.5rem'
                color='#EB3649' position='relative'>
            <div className={style.block}>
                <h2>{car.name}</h2>
                <h3>{car.brand}</h3>
                <h4>{car.model}</h4>
                {car.generation? <p className={style.p}>{car.generation}</p>: undefined}
                {car.year? <p className={style.p}> year: {car.year}</p> : undefined}
                {car.doors ? <p className={style.p}>doors: {car.doors}</p> : undefined}
                {car.engine ? <p className={style.p}>engine: {car.engine}</p> : undefined}
                {car.hp ? <p className={style.p}>Horse Power: {car.hp}</p> : undefined}
                {car.isStock ?<p className={style.p}>Stock</p> : <p className={style.p}>Tuned</p>}
                {car.rims ? <p className={style.p}>rims: {car.rims}</p> : undefined}
                {car.ownTime ? <p className={style.p}>Own time: {car.ownTime}</p> : undefined}
            </div>


        </MyCard>
    );
};
