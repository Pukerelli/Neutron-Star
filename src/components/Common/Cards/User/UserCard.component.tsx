import React from 'react';
import {IUser} from "../../../../common/interfaces/index.interface";
import {useHistory} from "react-router-dom";
import {TitleContainer} from "../../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";
import {
    ImgCommon,
    NameDouble,
    NameMini,
    Subtitle,
    Title
} from "../../../../styles/StyledComponents/Common/Common.styledComponents";
import userDefault from "../../../../common/images/userDefault.png";
import {
    UserCardAvatar,
    UserCardDescription,
    UserCardLayout
} from "../../../../styles/StyledComponents/Cards/User/UserCard.styledComponents";
import {CardButton} from "../../Buttons/CardButtons/CardButton.component";
import {CarCardButtonContainer} from '../../../../styles/StyledComponents/Cards/Cars/CarCard.styledComponent';

export const UserCard: React.FC<{ user: IUser }> = ({user}) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/user/${user.username}`)
    }
    return (
        <UserCardLayout>
            <UserCardDescription>
                <TitleContainer onClick={onClick}>
                    <NameMini>{user.username}</NameMini>
                    <NameDouble>{user.fullName}</NameDouble>
                </TitleContainer>
                <Title>age:</Title>
                <Subtitle>{user.age ? user.age : 'unknown'}</Subtitle>
                <Title>Garage:</Title>
                <Subtitle>{user.cars.length}</Subtitle>
                <Title>Country:</Title>
                <Subtitle>{user.address?.country ? user.address.country : 'unknown'}</Subtitle>
                <Title>City:</Title>
                <Subtitle>{user.address?.city ? user.address.city : 'unknown'}</Subtitle>
                <Title>Driving Exp.:</Title>
                <Subtitle>{user.drivingExperience ? user.drivingExperience : 'unknown'}</Subtitle>
            </UserCardDescription>
            <UserCardAvatar>
                <ImgCommon
                    src={user.photo || userDefault}/>
            </UserCardAvatar>
            <CarCardButtonContainer>
                <CardButton followedBy={user.followedBy} payload={user.username} card={'user'}/>
            </CarCardButtonContainer>
        </UserCardLayout>
    );
};