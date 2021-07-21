import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../selectors/auth/auth.selector";

export const Subscriptions = () => {
    const dispatch = useAppDispatch()
    const auth = useSelector(selectAuthUser)
    const [subs, setSubs] = useState<'car' | 'user'>("user")




    useEffect(() => {
        if(auth === 'unauthorized'){
            return
        }
        if(subs === 'user'){
            return
        }
    }, [subs, auth])


    if(auth === 'unauthorized'){
        return <div>please log in</div>
    }

    return (
        <div>
            <div>cars</div>
            <div>users</div>
        </div>
    );
};
