import React from 'react';
import {useState} from 'react';
import {Card} from "../../../styles/StyledComponents/Cards/Card";
import {ImgSimple} from '../../../styles/StyledComponents/Images/ImgSimple.styledComponent';
import {useSelector} from "react-redux";
import {selectCarSlider} from "../../../selectors/Cars/Car.selector";
import {TrnsprntBtn} from "../../../styles/StyledComponents/Buttons/transparentButton.styledComponent";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface IProps {
    height: string
    width?: string
}

export const CarSlider: React.FC<IProps> = ({height, width}) => {
    const carSliderData = useSelector(selectCarSlider)
    const srcArray = carSliderData.src
    const maxCount = srcArray.length - 1
    let [counter, setCounter] = useState(0)
    let [currentSrc, setCurrentSrc] = useState(srcArray[counter])

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
        if (counter < srcArray.length - 1) {
            setCounter(++counter)
            setCurrentSrc(srcArray[counter])

        } else {
            setCurrentSrc(srcArray[0])
            setCounter(0)
        }
    }
    const onBackClick = () => {
        debugger
        if (counter == 0) {
            setCurrentSrc(srcArray[maxCount])
            setCounter(maxCount)
        } else {
            setCounter(--counter)
            setCurrentSrc(srcArray[counter])
        }
    }

    return (
        <Card boxShadow={true} width={width} height={height}>
            <TrnsprntBtn height='50vh' width='20%' radius='none' cords='0, 0' border='none' right='80%' top='0'
                         onClick={onBackClick}>
                <ArrowBackIosIcon/>
            </TrnsprntBtn>
            <TrnsprntBtn width='3.3rem' height='1.2rem' color='#EB3649' top='10%' right='50%'
                         onClick={onInfoButtonClick}>{carInfo === '0' ? 'SHOW' : 'HIDE'}</TrnsprntBtn>

            <Card boxShadow={true} position='absolute' width='60%' height='40%' textAlign='center'
                  top='25%' right='50%' cords='50%, 0' padding='2rem' opacity={carInfo} transition='0.7s'>
                <h2>car</h2>
            </Card>
            <ImgSimple src={currentSrc}/>

            <TrnsprntBtn height='50vh' width='20%' radius='none' cords='0, 0' top='0' right='0' border='none'
                         onClick={onForwardClick}>
                <ArrowForwardIosIcon/>
            </TrnsprntBtn>
        </Card>
    )
}
