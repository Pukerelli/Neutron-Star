import React from 'react';
import { IUser } from '../../../../../../../../common/interfaces/index.interface';
import {UserEditForm} from "./UserEditForm.component";
import {IUpdateUser} from "../../../../../../../../API/user.api";
import {useAppDispatch} from "../../../../../../../../store";
import {userUpdateAction} from "../../../../../../../../store/actions/user.action";

export const UserProfileEdit: React.FC<{user: IUser}> = ({user}) => {
    const dispatch = useAppDispatch()
    const onSubmit = (values: IUpdateUser) => {
        dispatch(userUpdateAction(values))
    }

    return <UserEditForm  onSubmit={onSubmit} user={user}/>
};

