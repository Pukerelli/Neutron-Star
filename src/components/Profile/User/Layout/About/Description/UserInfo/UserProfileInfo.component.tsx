import React from 'react';
import {IUser} from '../../../../../../../common/interfaces/index.interface';
import {Subtitle, Title} from "../../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {UserInfo} from "../../../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";

export const UserProfileInfo: React.FC<{user: IUser}> = ({user}) => {
    return (
        <UserInfo>
            <Title>Name:</Title>
            <Subtitle>{user.fullName}</Subtitle>
            <Title>Country: </Title>
            <Subtitle>{user.address?.country? user.address.country: 'unknown'}</Subtitle>
            <Title>City: </Title>
            <Subtitle>{user.address?.city? user.address.city: 'unknown'}</Subtitle>
            <Title>Age:</Title>
            <Subtitle>{user.age? user.age:  'unknown'}</Subtitle>
            <Title>Drive exp. : </Title>
            <Subtitle>{user.drivingExperience? user.drivingExperience: 'unknown'}</Subtitle>
        </UserInfo>
    )
}

