import React from 'react';
import {IUser} from "../../../../../common/interfaces/common-interfaces/index.interface";
import {MyCard} from "../../../../../styles/StyledComponents/Cards/MyCard";

interface IProps {
    user: IUser
}

export const UserInfoMini: React.FC<IProps> = ({user}) => {
    return (
        <MyCard boxShadow={true} width='100%' minHeight='none' height='inherit' color='#EB3649' display='flex' padding='0.6rem' >
            <div style={{ width: '30%'}}>
                <h2>{user.username}</h2>
                <h3>owner: {user.fullName}</h3>
            </div>
        </MyCard>
    );
};

