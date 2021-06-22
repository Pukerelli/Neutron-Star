import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {ContentLayout, Layout} from '../../../styles/StyledComponents/Layout/Layout.styledComponent';
import {NavBar} from "../../Common/NavBar/NavBar.component";
import {UserCard} from "./UserCard.component";
import {useAppDispatch} from "../../../store";
import {fetchUser} from "../../../store/reducers/Profile/user.slice";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";
import {selectUserFetchErrors, selectUserProfile} from "../../../selectors/Profile/UserProfile.selector";
import {getCars} from "../../../store/reducers/Cars/Car.slice";
import {selectCars} from "../../../selectors/Cars/Car.selector";


export const UserProfile = () => {
    const navBar = ['profile', 'messages', 'album', 'following', 'bookmarks']
    const {username} = useParams<{ username: string }>();
    const dispatch = useAppDispatch()
    const history = useHistory()
    const auth = useSelector(selectAuthUser)
    const error = useSelector(selectUserFetchErrors)
    const user = useSelector(selectUserProfile)
    const cars = useSelector(selectCars)

    if(auth === 'unauthorized'){
        history.push('/auth/login')
    }

    useEffect(() => {
        if (username && username !== 'unauthorized') {
            dispatch(fetchUser(username))
            dispatch(getCars(username))
        }
        if (!username) {
            history.push(`/profile/${auth}`)
        }
    }, [username])
    if (error.includes('404')) {
        return <div>user not found</div>
    }


    return (
        <Layout>
            <NavBar navBar={navBar} address={''}/>
            <ContentLayout gridColumn='1fr' >
                <UserCard  cars={cars} user={user} auth={auth}/>
            </ContentLayout>
        </Layout>
    );
};

