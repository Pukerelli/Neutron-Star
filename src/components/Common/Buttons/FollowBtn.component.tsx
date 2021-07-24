import React from 'react';
import {CommonBtn, ICommonBtn} from "../../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {useAppDispatch} from "../../../store";
import {IAction} from "../../../common/interfaces/index.interface";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";

interface IProps {
    payload: string
    followedBy: Array<string>
    btnStyle: ICommonBtn
    followAction: IAction<{payload: string}>
    unFollowAction: IAction<{payload: string}>
}


export const FollowBtn: React.FC<IProps> = ({payload, followedBy, btnStyle, followAction, unFollowAction}) => {
    const dispatch = useAppDispatch()
    const auth = useSelector(selectAuthUser)
    const followHandler = (follow: boolean) => {
        if (follow) {
            dispatch(followAction({payload}))
        } else {
            dispatch(unFollowAction({payload}))
        }
    }
    return (
        <>
            {
                followedBy.includes(auth)
                    ? <CommonBtn {...btnStyle}
                                 onClick={() => followHandler(false)}>unfollow</CommonBtn>
                    : <CommonBtn {...btnStyle}
                                 onClick={() => followHandler(true)}>follow</CommonBtn>
            }

        </>
    );
};
