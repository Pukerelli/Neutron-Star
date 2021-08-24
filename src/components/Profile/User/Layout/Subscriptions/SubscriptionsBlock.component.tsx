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
        history.push(`/${link}/${name}`)

    if(!following.length)
        return null

    return (
        <UserSubscriptions>
            <SubsTitle>Subscriptions</SubsTitle>
            {
                following.map(name =>
                    <Subscribers handler={onSubClick} key={name} link={link} name={name}/>)
            }
        </UserSubscriptions>
    );
};



