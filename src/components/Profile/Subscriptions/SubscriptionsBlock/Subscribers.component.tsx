import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useHistory} from "react-router-dom";
import {SubscribersCard} from '../../../../styles/StyledComponents/Profile/Subscribtions/Subscriptions/SubscriptionsBlock.styledComponents';

interface IProps{
    name: string
    link: string
}

export const Subscribers: React.FC<IProps> = ({name, link}) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/profile/${link}/${name}`)
    }
    return (
        <SubscribersCard onClick={onClick}>
            <AccountCircleIcon/>
            <p>{name}</p>
        </SubscribersCard>
    );
};
