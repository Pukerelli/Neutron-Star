import React from 'react';
import {CardBtn} from "../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {useAppDispatch} from "../../../../store";
import {IAction} from "../../../../common/interfaces/index.interface";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";

interface IProps {
    payload: string
    followedBy: Array<string>
    followAction: IAction<{payload: string}>
    unFollowAction: IAction<{payload: string}>
}


export const ButtonFollow: React.FC<IProps> = ({payload, followedBy, followAction, unFollowAction}) => {
    const dispatch = useAppDispatch()
    const auth = useSelector(selectAuthUser)
    const followHandler = ( e: React.SyntheticEvent, follow: boolean) => {
        e.stopPropagation()
        if (follow)
            dispatch(followAction({payload}))
         else
            dispatch(unFollowAction({payload}))
    }
    return (
        <>
            {
                followedBy.includes(auth)
                    ? <CardBtn onClick={(e) => followHandler(e, false)}>unfollow</CardBtn>
                    : <CardBtn onClick={(e) => followHandler(e, true)}>follow</CardBtn>
            }

        </>
    );
};
