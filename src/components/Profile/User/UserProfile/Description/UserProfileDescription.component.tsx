import React, {useState} from 'react';
import {UserInfo, UserDescription} from "../../../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import {IUser} from "../../../../../common/interfaces/index.interface";
import {
    Name,
    OnlineStatus,
    Subtitle,
    Title
} from '../../../../../styles/StyledComponents/Common/Common.styledComponents';

interface IProps {
    user: IUser
}

export const UserProfileDescription: React.FC<IProps> = ({user}) => {
    const [edit, toggleEdit] = useState(false)
    const onClick = () => {
        toggleEdit(!edit)
    }
    return (
            <UserDescription>
                <Name underline={true}>{user.username}</Name>
                <OnlineStatus>Online</OnlineStatus>
                <UserInfo>
                    <Title>Name:</Title>
                    <Subtitle>Anton Creator</Subtitle>
                    <Title>Country: </Title>
                    <Subtitle>Russia</Subtitle>
                    <Title>City: </Title>
                    <Subtitle>Saint-Petersburg</Subtitle>
                    <Title>Age:</Title>
                    <Subtitle>22 years</Subtitle>
                    <Title>Drive exp. : </Title>
                    <Subtitle>2 years</Subtitle>
                </UserInfo>
            </UserDescription>
    );
}


