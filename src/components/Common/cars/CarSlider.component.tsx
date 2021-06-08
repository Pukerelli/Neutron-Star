import React, {useEffect, useState} from 'react';
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";
import {ImgSimple} from '../../../styles/StyledComponents/Images/ImgSimple.styledComponent';
import {useSelector} from "react-redux";
import {selectCars} from "../../../selectors/Cars/Car.selector";
import {TrnsprntBtn} from "../../../styles/StyledComponents/Buttons/transparentButton.styledComponent";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { defaultImage } from '../../../common/images/images';

interface IProps {
    height: string
    width?: string
}

export const CarSlider: React.FC<IProps> = ({height, width}) => {
    const carSliderData = useSelector(selectCars)

    const maxCount = carSliderData.length - 1
    let [counter, setCounter] = useState(0)
    let [currentSrc, setCurrentSrc] = useState(carSliderData[counter].photo?carSliderData[counter].photo : defaultImage)

    const [carInfo, setCarInfo] = useState('0')
    const onInfoButtonClick = () => {
        if (carInfo === '1') {
            setCarInfo('0')
        } else {
            setCarInfo('1')
        }
    }


    const onForwardClick = () => {
        debugger
        if (counter < carSliderData.length - 1) {
            setCounter(++counter)
            setCurrentSrc(carSliderData[counter].photo)

        } else {
            setCurrentSrc(carSliderData[0].photo)
            setCounter(0)
        }
    }
    const onBackClick = () => {
        debugger
        if (counter == 0) {
            setCurrentSrc(carSliderData[maxCount].photo)
            setCounter(maxCount)
        } else {
            setCounter(--counter)
            setCurrentSrc(carSliderData[counter].photo)
        }
    }

    return (
        <MyCard boxShadow={true} width={width} height={height} color='#EB3649'>
            {maxCount > 1? <TrnsprntBtn height='50vh' width='20%' radius='none' cords='0, 0' border='none' right='80%' top='0'
                         onClick={onBackClick}>
                <ArrowBackIosIcon/>
            </TrnsprntBtn>: undefined}
            <TrnsprntBtn width='3.3rem' height='1.2rem' color='#EB3649' top='10%' right='50%'
                         onClick={onInfoButtonClick}>{carInfo === '0' ? 'SHOW' : 'HIDE'}</TrnsprntBtn>

            <MyCard boxShadow={true} position='absolute' width='60%' height='40%' textAlign='center'
                    top='25%' right='50%' cords='50%, 0' padding='2rem' opacity={carInfo} transition='0.7s'>
                <p>{carSliderData[counter].name}</p>
                <p>{carSliderData[counter].model}</p>
            </MyCard>
            <ImgSimple src={currentSrc? currentSrc : defaultImage}/>

            {maxCount > 1?<TrnsprntBtn height='50vh' width='20%' radius='none' cords='0, 0' top='0' right='0' border='none'
                         onClick={onForwardClick}>
                <ArrowForwardIosIcon/>
            </TrnsprntBtn>: undefined}


        </MyCard>
    )
}
