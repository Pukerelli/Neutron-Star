import React, {useState} from 'react';
import {GridLayout} from "../../../../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {CarAvatar} from "../../../../Common/Avatar/CarAvatar.component";
import {CarInfo} from "../CarInfo/CarInfo.component";
import {ICar} from "../../../../../common/interfaces/common-interfaces/index.interface";
import {CommonBtn} from "../../../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {UpdateCarInfo} from "../../CarAdd/UpdateCarInfo.component";
import {FollowBtn} from "../../../../Common/Buttons/FollowBtn.component";
import {carFollowAction, carUnfollowAction} from "../../../../../store/actions/car.action";
import {CarNoteMini} from "../CarNote/CarNoteMini.component";

interface IProps {
    auth: string
    car: ICar
    onNoteClick: () => void
    onNewNoteHandler: () => void
}

export const CarCard: React.FC<IProps> = ({car, onNoteClick, onNewNoteHandler, auth}) => {
    const [edit, toggleEdit] = useState(false)
    const onEditHandler = () => {
        toggleEdit(!edit)
    }

    return (
        <GridLayout width='100%' gridColumns='1fr 1fr' gridGap='1rem' position='relative'>
            <CarAvatar carName={car.name} owner={car.owner} photo={car.photo}/>
            {
                edit
                    ? <UpdateCarInfo carName={car.name} car={car} onEditHandler={onEditHandler}/>
                    : <CarInfo car={car}/>
            }
            {
                auth === car.owner
                    ? <CommonBtn width='10vw' height='2rem' top='-15%' color='#EB3649'
                                 onClick={onEditHandler}>{edit ? 'cancel' : 'edit'}</CommonBtn>
                    : <FollowBtn btnStyle={{width: '10vw', height: '3rem', top: '95%', color: '#EB3649'}}
                                 payload={car.name} followedBy={car.followedBy}
                                 followAction={carFollowAction} unFollowAction={carUnfollowAction}/>
            }
            {car.notes.map(note => <CarNoteMini car={car._id} note={note} key={note!._id} handler={onNoteClick}/>)}
            <CommonBtn width='7vw' height='2rem'  color='#EB3649' position='static' margin='0 auto'
                       onClick={onNewNoteHandler}>new note</CommonBtn>
        </GridLayout>
    );
}
