import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {UserCard} from "./UserCard.component";
import {useAppDispatch} from "../../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {selectProfileFetchErrors} from "../../../../selectors/Profile/UserProfile.selector";
import {carGarageAction} from "../../../../store/actions/car.action";
import {profileUserAction} from "../../../../store/actions/profile.action";


export const UserProfile = () => {
    const {username} = useParams<{ username: string }>();
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const error = useSelector(selectProfileFetchErrors)


    ///// effects depends on username

    useEffect(() => {
        if (!username) {
            history.push(`/profile/user/${auth}`)
            return
        }
        if (username !== 'unauthorized') {
            dispatch(profileUserAction(username))
            dispatch(carGarageAction(username))
            return
        }

    }, [username])

    ///// redirecting after login

    useEffect(() => {
        if (username === 'unauthorized' && auth !== 'unauthorized') {
            history.push(`/profile/user/${auth}`)
        }
    }, [username, auth])

    ///// checking auth


    ///// error handling
    if (error) {
        return <div>user not found</div>
    }
    if(username === 'unauthorized'){
        return <div>please log in</div>
    }

    return (
        <>
            <UserCard auth={auth}/>
        </>
    );
}

