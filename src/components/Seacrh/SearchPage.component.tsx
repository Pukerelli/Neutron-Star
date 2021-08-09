import {useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import React, {useEffect, useState} from "react";
import {selectListCars, selectListIsFetching, selectListUsers} from "../../selectors/list/list.selector";
import {listUnmountAction, searchCarAction, searchUserAction} from "../../store/actions/list.action";
import {Search} from "./Layout/Search.component";
import {userProfileAction} from "../../store/actions/user.action";
import {selectUserIsFetching, selectUserProfile} from "../../selectors/user/user.selector";
import { ListFetching } from "../Common/Fetching/List.fetchingComponents";

export const SearchPage: React.FC = () => {
    const [value, setValue] = useState('')
    const [search, setSearch] = useState<'cars' | 'users'>('users')
    const userIsFetching = useSelector(selectUserIsFetching)
    const listIsFetching = useSelector(selectListIsFetching)
    const dispatch = useAppDispatch()
    const cars = useSelector(selectListCars)
    const users = useSelector(selectListUsers)
    const auth = useSelector(selectAuthUser)
    const user = useSelector(selectUserProfile)

    useEffect(() => {
        dispatch(userProfileAction(auth))
        return () => {
            dispatch(listUnmountAction())
        }
    }, [auth])

    useEffect(() => {
        dispatch(listUnmountAction())
        if (search === 'users')
            dispatch(searchUserAction(value))
        else
            dispatch(searchCarAction(value))
    }, [search, value])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)

    const onClick = () => {
        if (search === 'users')
            setSearch('cars')
        else
            setSearch('users')
    }

    if (userIsFetching || listIsFetching)
        return <ListFetching search={true}/>

    return <Search search={search} onChange={onChange} value={value} auth={auth}
                   cars={cars} users={users} user={user} toggle={onClick}/>

};