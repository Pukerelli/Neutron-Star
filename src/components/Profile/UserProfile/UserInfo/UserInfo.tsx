import React, {useState} from 'react';
import {MyCard} from "../../../../styles/StyledComponents/Cards/MyCard";
import {UserUpdateForm} from "./UserUpdateForm.component";
import {IUser} from "../../../../common/interfaces/common-interfaces/index.interface";
import EditIcon from '@material-ui/icons/Edit';

interface IProps {
    user: IUser
}

export const UserInfo: React.FC<IProps> = ({user}) => {
    const [edit, toggleEdit] = useState(false)
    const onClick = () => {
        toggleEdit(!edit)
    }
    return (
        <MyCard boxShadow={true} width='100%' height='100%' padding='1rem'
                color='#EB3649' position='relative'>
            <EditIcon fontSize='small' onClick={onClick}
                      style={{color: 'white', position: 'absolute', right: '5%', top: '5%'}}/>
            {edit ? <UserUpdateForm user={user} toggleEdit={onClick}/> :
                <div style={{height: '100%', color: 'white'}}>
                    <h2>{user.username ? user.username : undefined}</h2>
                    {user.fullName ? <h3>{user.fullName}</h3> : undefined}
                    {user.age ? <p>{user.age} years old</p> : undefined}
                    {user.address?.country ? <p>{user.address.country}</p> : undefined}
                    {user.address?.city ? <p>{user.address.city}</p> : undefined}
                    {user.interests ? <p>{user.interests}</p> : undefined}
                    {user.about ? <p>{user.about}</p> : undefined}
                </div>}

        </MyCard>
    );
}


