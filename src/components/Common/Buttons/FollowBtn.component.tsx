import React from 'react';
import {CommonBtn, ICommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {useAppDispatch} from "../../../store";
import {followCar, unfollowCar} from "../../../store/reducers/Cars/Car.slice";

interface IProps {
    carname: string
    followedBy: Array<string>
    btnStyle: ICommonBtn
}


export const FollowBtn: React.FC<IProps> = ({carname, followedBy, btnStyle}) => {
    const dispatch = useAppDispatch()


    const followHandler = (follow: boolean) => {
        if (follow) {
            dispatch(followCar({carname}))
        } else {
            dispatch(unfollowCar(carname))
        }
    }
    return (
        <>
            {
                followedBy.includes('creator')
                    ? <CommonBtn {...btnStyle}
                                 onClick={() => followHandler(false)}>unfollow</CommonBtn>
                    : <CommonBtn {...btnStyle}
                                 onClick={() => followHandler(true)}>follow</CommonBtn>
            }

        </>
    );
};
