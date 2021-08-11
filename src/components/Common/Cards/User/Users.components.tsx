import React from 'react';
import {IUser} from "../../../../common/interfaces/index.interface";
import {UserCard} from "./UserCard.component";


export const Users: React.FC<{ users: Array<IUser> }> = ({users}) => {
    return (
        <>
            {users.map((user) => <UserCard key={user.id} user={user}/> )}
        </>
    )
}
