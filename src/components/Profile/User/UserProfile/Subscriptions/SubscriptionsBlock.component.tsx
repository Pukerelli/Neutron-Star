import React from 'react';
import {SubsTitle, UserSubscriptions } from '../../../../../styles/StyledComponents/Profile/Subscribtions/Subscriptions/SubscriptionsBlock.styledComponents';
import {Subscribers} from "../../../Subscriptions/SubscriptionsBlock/Subscribers.component";

interface IProps{
    following: Array<string>
    link: string
}


export const SubscriptionsBlock: React.FC<IProps> = ({following, link}) => {
    let pieceOfFollowing: Array<string> = []
    if (following.length>0)
        pieceOfFollowing = following.slice(0, (following.length > 6 ? 6 : following.length))
    return (
        <UserSubscriptions>
            <SubsTitle>Subscriptions</SubsTitle>
            {pieceOfFollowing.map((name, i) => <Subscribers key={i} link={link} name={name}/>)}
        </UserSubscriptions>
    );
};



