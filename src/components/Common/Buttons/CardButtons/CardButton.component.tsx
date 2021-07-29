import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    listFollowCarAction,
    listFollowUserAction,
    listUnfollowCarAction,
    listUnfollowUserAction,
    subsUnfollowCarAction,
    subsUnfollowUserAction
} from '../../../../store/actions/list.action';
import {ButtonFollow} from "./ButtonFollow.component";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import { CardBtn } from '../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import {useAppDispatch} from "../../../../store";
import {carDeleteAction} from "../../../../store/actions/car.action";
import {SearchSelf} from "../../../../styles/StyledComponents/Common/Common.styledComponents";

interface IProps {
    card: 'user' | 'car'
    owner?: string
    payload: string
    followedBy: Array<string>

}


export const CardButton: React.FC<IProps> = ({card, owner, payload, followedBy}) => {
    const location = useLocation()
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    let carUnfollow = listUnfollowCarAction
    let userUnfollow = listUnfollowUserAction

    const onDeleteClick = () => {
        dispatch(carDeleteAction(payload))
    }

    if (location.pathname.includes('subscriptions')) {
        carUnfollow = subsUnfollowCarAction
        userUnfollow = subsUnfollowUserAction
    }
    if (card === 'user' && auth === payload)
        return <SearchSelf>it's you!</SearchSelf>

    if (card === 'car' && auth === owner) {
        if (location.pathname.includes('garage'))
            return <CardBtn onClick={onDeleteClick} delete={true}>Delete</CardBtn>
        else
            return <SearchSelf>it's yours</SearchSelf>
    }
    if(auth === 'unauthorized')
        return null

    return <ButtonFollow followAction={card === 'user' ? listFollowUserAction : listFollowCarAction}
                         unFollowAction={card === 'user' ? userUnfollow : carUnfollow}
                         followedBy={followedBy} payload={payload}/>
};

