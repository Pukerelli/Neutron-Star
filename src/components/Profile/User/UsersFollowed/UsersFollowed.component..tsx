import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import { selectAuthUser } from '../../../../selectors/auth/auth.selector';
import {selectProfileIsFetching, selectUsersProfiles } from '../../../../selectors/Profile/UserProfile.selector';
import { useAppDispatch } from '../../../../store';
import { UserCardMini } from '../UserProfile/UserCardMini.component.';
import { profileFollowedUsersAction } from '../../../../store/actions/profile.action';



export const UsersFollowed = () => {
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const users = useSelector(selectUsersProfiles)
    const isFetching = useSelector(selectProfileIsFetching)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (auth !== 'unauthorized') {
            dispatch(profileFollowedUsersAction())
            return
        }
        if (auth === 'unauthorized') {
            history.push('/auth/login')
            return
        }
    }, [auth])
    if (isFetching) {
        return <div></div>
    }

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            {users.map((user, i) => <UserCardMini user={user} key={user.id / i}/>)}
        </div>
    );
};

