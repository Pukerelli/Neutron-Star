import React from 'react';
import {CardBtn} from "../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";

interface IProps {
    payload: string
    followedBy: Array<string>
    onFollowClick: () => void
    onUnfollowClick: () => void
    auth: string
}

export const ButtonFollow: React.FC<IProps> = (props) => {

    const followHandler = ( e: React.SyntheticEvent, follow: boolean) => {
        e.stopPropagation()
        if (follow)
            props.onFollowClick()
         else
            props.onUnfollowClick()
    }
    return (
        <>
            {
                props.followedBy.includes(props.auth)
                    ? <CardBtn onClick={(e) => followHandler(e, false)}>unfollow</CardBtn>
                    : <CardBtn onClick={(e) => followHandler(e, true)}>follow</CardBtn>
            }
        </>
    );
};
