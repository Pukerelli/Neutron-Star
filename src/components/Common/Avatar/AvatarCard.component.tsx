import React, {useState} from 'react';
import {TrnsprntBtn} from "../../../styles/StyledComponents/Buttons/transparentButton.styledComponent";
import {ImgSimple} from "../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";

interface IProps{
    photo: string | undefined
    photoHandler: (photo: string) => void
}

export const AvatarCard: React.FC<IProps> = ({photo, photoHandler}) => {
    const [display, setDisplay] = useState(false)
    const [value, setValue] = useState('')
    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClick = () => {
        setDisplay(true)
    }
    const submitHandler = () => {
        if(value !== '')
            photoHandler(value)
        setDisplay(false)
        setValue('')
    }
    return (
        <MyCard width='100%' height='50vh' boxShadow={true} color='inherit' position='relative'>
            {display ? <span style={{position: 'absolute', top: '10%' ,right: '25%'}} >
                <input type='text' value={value} autoFocus={true} onChange={(e) => inputHandler(e)}/>
                <TrnsprntBtn onClick={submitHandler}
                             width='3.3rem' height='1.2rem' color='#EB3649'>{value === ''? 'abort': 'confirm'}</TrnsprntBtn>
            </span> : <TrnsprntBtn width='3.3rem' height='1.2rem' color='#EB3649' top='10%' right='50%'
                                   onClick={onClick}>update</TrnsprntBtn>}
            <ImgSimple src={photo}/>

        </MyCard>
    );
};

