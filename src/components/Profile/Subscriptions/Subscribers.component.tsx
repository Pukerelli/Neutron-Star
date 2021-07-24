import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useHistory} from "react-router-dom";
import {SubscribersCard} from '../../../styles/StyledComponents/Profile/Subscribtions/UserSubscriptions.styledComponents';


export const Subscribers: React.FC<{ name: string }> = ({name}) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/profile/user/${name}`)
    }
    return (
        <SubscribersCard onClick={onClick}>
            <AccountCircleIcon/>
            <p>{name}</p>
        </SubscribersCard>
    );
};
