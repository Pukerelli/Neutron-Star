import React from 'react';
import {CommonBtn, ICommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {useAppDispatch} from "../../../store";
import {carFollowAction, carUnfollowAction} from "../../../store/actions/car.action";

interface IProps {
    carname: string
    followedBy: Array<string>
    btnStyle: ICommonBtn
}


export const FollowBtn: React.FC<IProps> = ({carname, followedBy, btnStyle}) => {
    const dispatch = useAppDispatch()


    const followHandler = (follow: boolean) => {
        if (follow) {
            dispatch(carFollowAction({carname}))
        } else {
            dispatch(carUnfollowAction(carname))
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
