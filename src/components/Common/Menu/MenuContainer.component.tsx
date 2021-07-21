import React from 'react';
import {useHistory} from "react-router-dom";
import {ImgSimple} from '../../../styles/StyledComponents/Images/ImgSimple.styledComponent';

interface IProps {
    image: string
    title: string
    link: string
    location: string
}


export const MenuContainer: React.FC<IProps> = ({image, title, link, location}) => {
    const history = useHistory()

    const onClick = () => {
        history.push(`/${location}/${link}`)
    }

    return (
        <div onClick={onClick} style={{
            cursor: 'pointer', backgroundColor: 'rgb(235,54,73)',
            width: '170px', height: '170px', borderRadius: '20px', margin: '0 auto', padding: '0.5rem',
            color: 'white', fontSize: '20px'
        }}>
            <ImgSimple src={image} minHeight='none' height='85%' filter='invert(100%)'/>
            <div style={{bottom: 0, textAlign: 'center'}}>{title}</div>
        </div>
    );
}
