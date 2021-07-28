import React, {useState} from 'react';
import {UserProfileDescription} from "./Description/UserProfileDescription.component";
import {CommonBtn} from "../../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent";
import {UserProfileCars} from "./Cars/UserProfileCars.component";
import {UserAboutColumn} from "../../../../../styles/StyledComponents/Layout/ProfileLayout.styledComponents";
import {ICar, IUser} from "../../../../../common/interfaces/index.interface";

interface IProps {
    user: IUser
    cars: Array<ICar>

}

export const UserAbout: React.FC<IProps> = ({cars, user}) => {
    const [edit, toggleEdit] = useState(false)

    return (
        <UserAboutColumn>
            <UserProfileDescription user={user}/>
            <UserProfileCars cars={cars}/>
        </UserAboutColumn>
    );
};
