import React from 'react';
import {GridLayout} from '../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {MenuContainer} from '../../Common/Menu/MenuContainer.component';
import garage from '../../../common/images/garage.svg'

export const CarMenu = () => {
    return (
       <GridLayout width='100%' gridColumns='1fr 1fr 1fr' margin='0 auto'>
            <MenuContainer link={'garage'} image={garage} title={'garage'}/>
            <MenuContainer link={'garage'} image={garage} title={'garage'}/>
            <MenuContainer link={'garage'} image={garage} title={'garage'}/>
       </GridLayout>
    );
};






