import React, {useMemo, useState} from 'react';
import {MyCard} from '../../../styles/StyledComponents/Cards/MyCard'
import {ImgSimple} from '../../../styles/StyledComponents/Images/ImgSimple.styledComponent';
import {getRandomInt} from "../../../common/functions";
import {stockPhotos} from "../../../common/images/images";
import {TrnsprntBtn} from "../../../styles/StyledComponents/Buttons/transparentButton.styledComponent";
import {useAppDispatch} from "../../../store";
import {UpdateUserPhoto} from "../../../store/reducers/Profile/user.slice";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";

interface IProps{
    user: IUser
}

export const UserAvatar: React.FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch()
    const randomPic = useMemo(() => getRandomInt(0, 9), [])
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
        dispatch(UpdateUserPhoto({payload: value}))
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
            <ImgSimple src={user.photo? user.photo : stockPhotos[randomPic]}/>

        </MyCard>
    );
};

