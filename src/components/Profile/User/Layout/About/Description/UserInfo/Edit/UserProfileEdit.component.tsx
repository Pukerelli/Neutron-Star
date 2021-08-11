import React from 'react';
import {IUser} from '../../../../../../../../common/interfaces/index.interface';
import {UserEditForm} from "./UserEditForm.component";
import {IUpdateUser} from "../../../../../../../../API/user.api";
import {useAppDispatch} from "../../../../../../../../store";
import {userUpdateAction} from "../../../../../../../../store/actions/user.action";

interface IProps {
    user: IUser
    toggle: () => void
}

export const UserProfileEdit: React.FC<IProps> = ({user, toggle}) => {
    const dispatch = useAppDispatch()
    const onSubmit = (values: IUpdateUser) => {
        dispatch(userUpdateAction(values))
        toggle()
    }

    return <UserEditForm  onSubmit={onSubmit} user={user}/>
};

