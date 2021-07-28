import React from 'react';
import {Cars} from "../../../../../Common/Cards/Cars/Cars.component";
import {GarageCarsColumn} from "../../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {ICar} from '../../../../../../common/interfaces/index.interface';
import {CommonBtn} from "../../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";

export const GarageCars: React.FC<{cars: Array<ICar>}> = ({cars}) => {
    return (
        <GarageCarsColumn>
            <CommonBtn width='530px' height='40px'>ADD</CommonBtn>
            <Cars cars={cars}/>
        </GarageCarsColumn>
    );
};
