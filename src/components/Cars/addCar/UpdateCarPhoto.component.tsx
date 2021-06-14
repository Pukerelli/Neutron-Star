import React, {useState} from 'react';
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";
import {ImgSimple} from "../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {TrnsprntBtn} from "../../../styles/StyledComponents/Buttons/transparentButton.styledComponent";
import {useAppDispatch} from "../../../store";

import {defaultImage} from '../../../common/images/images';
import {uploadPhoto} from "../../../store/reducers/Cars/Car.slice";

interface IProps{
    carName: string
}

export const UpdateCarPhoto: React.FC<IProps> = ({carName}) => {
    const dispatch = useAppDispatch()
    const [photo, setPhoto] = useState('')


    const submitHandler = () => {
        if(photo.length > 4 && carName !== '' && carName){
            dispatch(uploadPhoto({photo, carName}))
        }
    }
    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPhoto(e.currentTarget.value)
    }
    return (
        <MyCard boxShadow={true} width='100%' height='50vh'
                color='#EB3649' padding='0.5rem' >
            <input type="text" onChange={inputHandler} value={photo} placeholder='put url here' style={{width: '100%'}}/>
            <ImgSimple onError={e => e.currentTarget.src = defaultImage} src={photo} height='80%' margin='1rem auto'/>
            <TrnsprntBtn onClick={submitHandler} top='89%'
                         width='50%' height='1.2rem' color='white' textColor='black' >
                {photo === ''? 'abort': 'confirm'}
            </TrnsprntBtn>
        </MyCard>
    );
};

