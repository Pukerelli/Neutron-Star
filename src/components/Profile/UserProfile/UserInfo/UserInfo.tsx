import React, {useEffect} from 'react';
import {Card} from "../../../../styles/StyledComponents/Cards/Card";
import {useSelector} from "react-redux";
import {selectIsFetchingUserData, selectUserProfile} from "../../../../selectors/Profile/UserProfile.selector";
import {useAppDispatch} from "../../../../store";
import {getUserData} from "../../../../store/reducers/Profile/user.slice";

export const UserInfo = () => {
    const dispatch = useAppDispatch()
    useEffect(()  => {
        dispatch(getUserData(1))
        }
        , [])

    const user = useSelector(selectUserProfile)
    const isFetching = useSelector(selectIsFetchingUserData)
    if(!user.city){
        return <h1>LOADING!!!</h1>
    }


    return (
        <Card boxShadow={true} width='100%' height='50vh' padding='1rem' >
            <h2>{user.username}</h2>
            {user.fullName?
                <h3>{user.fullName.firstName} {user.fullName.LastName}
                </h3>: undefined}
            {user.age?
                <p>{user.age} years old</p>
                : undefined}
            <p>{user.city.country}, {user.city.city}</p>
            {user.car?
               user.car.map(car => {
                   return <p>{car.brand} {car.model} {car.generation}</p>
               } )

            : undefined}


        </Card>
    );
};

