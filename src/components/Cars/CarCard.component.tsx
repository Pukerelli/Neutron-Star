import React, {useState} from 'react';
import {GridLayout} from "../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {CarAvatar} from "../Common/Avatar/CarAvatar.component";
import {CarInfo} from "./CarInfo/CarInfo.component";
import {ICar} from "../../common/interfaces/common-interfaces/index.interface";
import {CommonBtn} from "../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import {UpdateCarInfo} from "./addCar/UpdateCarInfo.component";
import {FollowBtn} from "../Common/Buttons/FollowBtn.component";

interface IProps{
    isFetching: boolean
    car: ICar
}

export const CarCard: React.FC<IProps> = ({car, isFetching}) => {
    const [edit, toggleEdit] = useState(false)
    const auth = useSelector(selectAuthUser)
    const onEditHandler = () => {
        toggleEdit(!edit)
    }

    if(isFetching || car.name === '')
        return <div>loading</div>

    return (
        <GridLayout width='100%' gridColumns='1fr 1fr' gridGap='1rem' position='relative'>
            <CarAvatar carName={car.name} owner={car.owner} photo={car.photo}/>
            {
                edit
                ? <UpdateCarInfo carName={car.name} car={car}/>
                : <CarInfo car={car}/>
            }
            {
                auth === car.owner
                    ? <CommonBtn width='10vw' height='3rem' top='95%' color='#EB3649'
                                 onClick={onEditHandler}>{edit? 'cancel': 'edit'}</CommonBtn>
                    : <FollowBtn btnStyle={{width: '10vw', height: '3rem', top: '95%', color: '#EB3649'}} carname={car.name} followedBy={car.followedBy}/>
            }
        </GridLayout>
    );
}
