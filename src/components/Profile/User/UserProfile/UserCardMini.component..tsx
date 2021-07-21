import React from 'react';
import {FollowBtn} from "../../../Common/Buttons/FollowBtn.component";
import {GridLayout} from "../../../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {ImgSimple} from "../../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {defaultImage} from "../../../../common/images/images";
import {IUser} from "../../../../common/interfaces/common-interfaces/index.interface";
import {profileFollowAction, profileUnfollowAction} from '../../../../store/actions/profile.action';
import {useHistory} from "react-router-dom";
import {UserInfoMini} from "./UserInfo/UserInfoMini.component";


interface IProps {
    user: IUser
}

export const UserCardMini: React.FC<IProps> = ({user}) => {
    const history = useHistory()

    const onClick = () => {
        history.push(`/profile/user/${user.username}`)
    }
    if(!user.followedBy){
        return <></>
    }

    return (
        <div style={{position: 'relative'}}>
            <FollowBtn btnStyle={{height: '2rem', width: '4rem', top: '10%', right: '105%'}}
                       followedBy={user.followedBy} payload={user.username}
                       followAction={profileFollowAction} unFollowAction={profileUnfollowAction}
            />
            <GridLayout width='100%' gridColumns='8fr 2fr' height='5rem'
                        margin='0 0 1rem 0' onClick={onClick}>
                <UserInfoMini user={user}/>
                <ImgSimple minHeight='none' src={user.photo ? user.photo : defaultImage}/>
            </GridLayout>
        </div>
    );
};

