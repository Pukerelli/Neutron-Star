import React from 'react';
import {Card} from "../../../../styles/StyledComponents/Cards/Card";
import {useSelector} from "react-redux";
import {selectUserProfile} from "../../../../selectors/Profile/UserProfile.selector";


export const UserInfo = () => {
    const user = useSelector(selectUserProfile)
    return (
        <Card boxShadow={true} width='100%' height='50vh' padding='1rem' >
            <h2>{user.username}</h2>
            {user.fullName?
                <h3>{user.fullName.firstName} {user.fullName.LastName}
                </h3>: undefined}
            {user.age?
                <p>{user.age} years old</p>
                : undefined}
            {/*<p>{user.city.country}, {user.city.city}</p>*/}
            {user.car?
               user.car.map(car => {
                   return <p>{car.brand} {car.model} {car.generation}</p>
               } )

            : undefined}


        </Card>
    );
};

