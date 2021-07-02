import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {UserCard} from "./UserCard.component";
import {useAppDispatch} from "../../../store";
import {fetchUser} from "../../../store/reducers/Profile/user.slice";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {selectUserFetchErrors} from "../../../selectors/Profile/UserProfile.selector";
import {getCars} from "../../../store/reducers/Cars/Car.slice";


export const UserProfile = () => {
    const {username} = useParams<{ username: string }>();
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const error = useSelector(selectUserFetchErrors)


    ///// effects depends on username

    useEffect(() => {
        // delete after adding global Errors
        dispatch({type: 'user/clearErrors'})
        ////////////////////////////////////
        if (!username){
            history.push(`/profile/user/${auth}`)
            return
        }
        if (username !== 'unauthorized') {
            dispatch(fetchUser(username))
            dispatch(getCars(username))
            return
        }

    }, [username])

    ///// redirecting after login

    useEffect(() => {
        if(username === 'unauthorized' && auth !== 'unauthorized'){
            history.push(`/profile/user/${auth}`)
        }
    }, [username, auth])

    ///// checking auth

    if(username === 'unauthorized'){
        history.push('/auth/login')
    }

    ///// error handling
    if (error.length > 0) {
        if (error.includes('404')) {
            return <div>user not found</div>
        }
    }

    return (
        <>
            {username === 'unauthorized' ? <></> : <UserCard auth={auth}/>}
        </>
    );
}

