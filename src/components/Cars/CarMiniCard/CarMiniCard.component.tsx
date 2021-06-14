import React from 'react';
import {GridLayout} from "../../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";
import {ImgSimple} from "../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {defaultImage} from '../../../common/images/images';
import {CarMiniInfo} from "./CarMiniInfo.component";
import {useHistory} from "react-router-dom";

interface IProps {
    car: ICar
    isFetching: boolean
}

export const CarMiniCard: React.FC<IProps> = ({car, isFetching}) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/cars/about/${car.name}`)
    }

    return (
        <GridLayout width='100%' gridColumns='8fr 2fr' height='5rem'
                    margin='0 0 1rem 0' onClick={onClick} style={{cursor: 'pointer'}}>
            {isFetching
                ? 'loading'
                : <>
                    <CarMiniInfo car={car}/>
                    <ImgSimple minHeight='none' src={car.photo ? car.photo : defaultImage}/>
                </>
            }
        </GridLayout>
    );
};
