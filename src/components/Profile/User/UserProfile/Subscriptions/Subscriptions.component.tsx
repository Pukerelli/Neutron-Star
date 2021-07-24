import React from 'react';
import {SubsTitle, UserSubscriptions } from '../../../../../styles/StyledComponents/Profile/Subscribtions/UserSubscriptions.styledComponents';
import {Subscribers} from "../../../Subscriptions/Subscribers.component";


export const Subscriptions: React.FC<{ following: Array<string> }> = ({following}) => {
    let pieceOfFollowing: Array<string> = []
    if (following.length>1)
        pieceOfFollowing = following.slice(0, (following.length > 6 ? 6 : following.length))
    return (
        <UserSubscriptions>
            <SubsTitle>Subscriptions</SubsTitle>
            {pieceOfFollowing.map((name, i) => <Subscribers key={i} name={name}/>)}
        </UserSubscriptions>
    );
};

