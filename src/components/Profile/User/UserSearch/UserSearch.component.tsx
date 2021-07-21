import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { selectAuthUser } from '../../../../selectors/auth/auth.selector';
import {selectProfileIsFetching, selectUsersProfiles } from '../../../../selectors/Profile/UserProfile.selector';
import { useAppDispatch } from '../../../../store';
import { profileSearchAction } from '../../../../store/actions/profile.action';

import { CommonBtn } from '../../../../styles/StyledComponents/Buttons/CommonButton.styledComponent';
import { UserCardMini } from '../UserProfile/UserCardMini.component.';

export const UserSearch = () => {
    const dispatch = useAppDispatch()
    const users = useSelector(selectUsersProfiles)
    const isFetching = useSelector(selectProfileIsFetching)
    const auth = useSelector(selectAuthUser)
    const [value, setValue] = useState('')


    useEffect(() => {
        dispatch(profileSearchAction(value))
        return () => {
        }
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onSubmit = () => {
        dispatch(profileSearchAction(value))
    }
    if (isFetching) {
        return <div></div>
    }

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem', display: 'flex'}}>
                <input type="text" style={{width: '90%', height: '2rem'}} value={value} onChange={onChange}/>
                <CommonBtn height='2rem' position='static' cords='0, 0' width='10%' type='submit' onClick={onSubmit}>
                    search
                </CommonBtn>
            </div>
            <div>
                {
                    users.map((user) =>
                        user.username === auth ? null : <UserCardMini user={user} key={user._id}/>)
                }
            </div>
        </div>
    );
};
