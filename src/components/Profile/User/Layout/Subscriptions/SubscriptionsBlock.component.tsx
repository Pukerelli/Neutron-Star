import React from 'react';
import {
    SubsTitle,
    UserSubscriptions
} from '../../../../../styles/StyledComponents/Profile/Subscribtions/Subscriptions.styledComponents';
import {Subscribers} from "../../../Subscriptions/Block/Subscribers.component";
import {useHistory} from "react-router-dom";

interface IProps {
    following: Array<string>
    link: string
}

export const SubscriptionsBlock: React.FC<IProps> = ({following, link}) => {
    const history = useHistory()

    const onSubClick = (name: string) =>
        history.push(`/profile/${link}/${name}`)

    let pieceOfFollowing: Array<string> = []

    if (following.length > 0)
        pieceOfFollowing = following.slice(0, (following.length > 6 ? 6 : following.length))

    return (
        <UserSubscriptions>
            <SubsTitle>Subscriptions</SubsTitle>
            {
                pieceOfFollowing.map(name =>
                    <Subscribers handler={onSubClick} key={name} link={link} name={name}/>)
            }
        </UserSubscriptions>
    );
};



