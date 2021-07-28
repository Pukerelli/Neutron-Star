import React from 'react';
import {IUser} from "../../../../common/interfaces/index.interface";
import {UserCard} from "./UserCard.component";


export const Users: React.FC<{ users: Array<IUser> }> = ({users}) => {
    return (
        <>
            {users.map((user, i) => <UserCard key={user.id / i} user={user}/> )}
        </>
    )
}
