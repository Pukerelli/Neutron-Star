import React from 'react';
import {GridLayout} from '../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {UserAvatar} from "../../Common/Avatar/UserAvatar";
import {UserInfo} from "./UserInfo/UserInfo";
import {CarSlider} from "../../Common/cars/CarSlider.component";

export const UserCard: React.FC = () => {
    return (
        <GridLayout width='100%' gridColumns='1fr 1fr 1fr' gridGap='1rem'>
            <UserAvatar />
            <UserInfo/>
            <CarSlider height='50vh' width='inherit'/>

        </GridLayout>
    );
}
