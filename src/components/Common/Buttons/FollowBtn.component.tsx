import React from 'react';
import {CommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {useAppDispatch} from "../../../store";
import {followCar, unfollowCar} from "../../../store/reducers/Cars/Car.slice";

interface IProps {
    carname: string
    followedBy: Array<string>
}


export const FollowBtn: React.FC<IProps> = ({carname, followedBy}) => {
    const dispatch = useAppDispatch()


    const followHandler = (follow: boolean) => {
        if (follow) {
            dispatch(followCar(carname))
        } else {
            dispatch(unfollowCar(carname))
        }
    }
    return (
        <>
            {
                followedBy.includes('creator')
                    ? <CommonBtn height='2rem' width='4rem' top='10%' right='105%'
                                 onClick={() => followHandler(false)}>unfollow</CommonBtn>
                    : <CommonBtn height='2rem' width='4rem' top='10%' right='105%'
                                 onClick={() => followHandler(true)}>follow</CommonBtn>
            }

        </>
    );
};
