import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {SubscribersCard} from '../../../../styles/StyledComponents/Profile/Subscribtions/Subscriptions.styledComponents';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

interface IProps {
    name: string
    link: string
    handler: (name: string) => void
}

export const Subscribers: React.FC<IProps> = ({name, link, handler}) => {
    const onClick = () =>
        handler(name)

    return (
        <SubscribersCard onClick={onClick}>
            {link.includes('cars') ? <DriveEtaIcon/> : <AccountCircleIcon/>}
            <p>{name}</p>
        </SubscribersCard>
    );
};
