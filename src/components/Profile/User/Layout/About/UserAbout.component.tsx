import React from 'react';
import {UserProfileDescription} from "./Description/UserProfileDescription.component";
import {UserProfileCars} from "./Cars/UserProfileCars.component";
import {UserAboutColumn} from "../../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ICar, IUser} from "../../../../../common/interfaces/index.interface";

interface IProps {
    user: IUser
    cars: Array<ICar>
    toggle: () => void
    edit: boolean
    auth: string
}

export const UserAbout: React.FC<IProps> = (props) => {
    return (
        <UserAboutColumn>
            <UserProfileDescription user={props.user}
                                    toggle={props.toggle} auth={props.auth} edit={props.edit}/>
            <UserProfileCars cars={props.cars} owner={props.user.username}/>
        </UserAboutColumn>
    );
};
