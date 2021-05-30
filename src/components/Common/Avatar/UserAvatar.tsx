import React from 'react';
import {Card} from '../../../styles/StyledComponents/Cards/Card'
import { ImgSimple } from '../../../styles/StyledComponents/Images/ImgSimple.styledComponent';


export const UserAvatar = () => {
    return (
        <Card width='100%' height='50vh' boxShadow={true} color='inherit'>
            <ImgSimple src='https://s0.rbk.ru/v6_top_pics/ampresize/media/img/8/69/754788641641698.jpeg'/>
        </Card>
    );
};
