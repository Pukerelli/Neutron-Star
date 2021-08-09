import React from 'react';
import {Cars} from "../../../../../Common/Cards/Cars/Cars.component";
import {GarageCarsColumn} from "../../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {useHistory} from "react-router-dom";

interface IProps {
    cars: Array<ICar>
    btn: boolean
}

export const GarageCars: React.FC<IProps> = ({cars, btn}) => {
    const history = useHistory()
    const onClick = () => history.push(`/profile/cars/add`)
    return (
        <GarageCarsColumn button={btn}>
            <CommonBtn display={btn} width='530px' height='40px' onClick={onClick}>ADD</CommonBtn>
            <Cars cars={cars}/>
        </GarageCarsColumn>
    );
};
