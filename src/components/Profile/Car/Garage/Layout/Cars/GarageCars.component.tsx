import React from 'react';
import {Cars} from "../../../../../Common/Cards/Cars/Cars.component";
import {GarageCarsColumn} from "../../../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {useHistory} from "react-router-dom";

interface IProps {
    cars: Array<ICar>
    btnHide: boolean
}

export const GarageCars: React.FC<IProps> = ({cars, btnHide}) => {
    const history = useHistory()
    const onClick = () => history.push(`/profile/cars/add`)
    return (
        <GarageCarsColumn hideBtn={btnHide}>
            <CommonBtn hide={btnHide} width='530px' height='40px' onClick={onClick}>ADD</CommonBtn>
            <Cars cars={cars}/>
        </GarageCarsColumn>
    )
};
