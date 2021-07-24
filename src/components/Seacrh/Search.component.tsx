import {useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../selectors/auth/auth.selector";
import React, {useEffect, useState} from "react";
import {CommonBtn} from "../../styles/StyledComponents/Buttons/CommonButton.styledComponent";
import {CarMiniCard} from "../Profile/Car/AboutCar/CarCard/CarMiniCard.component";
import {selectListCars, selectListUsers} from "../../selectors/list/list.selector";
import {listUnmountAction, searchCarAction, searchUserAction} from "../../store/actions/list.action";
import {UserCardMini} from "../Profile/Cards/UserCards/UserCardMini.component.";

export const Search: React.FC = () => {
    const [value, setValue] = useState('')
    const [search, setSearch] = useState<'cars' | 'users'>('users')
    const dispatch = useAppDispatch()
    const cars = useSelector(selectListCars)
    const users = useSelector(selectListUsers)
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        return () => {
            dispatch(listUnmountAction())
        }
    }, [])

    useEffect(() => {
        dispatch(listUnmountAction())
        if (search === 'users')
            dispatch(searchUserAction(value))
        else
            dispatch(searchCarAction(value))
    }, [search, value])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onSubmit = () => {
        if (search === 'users')
            dispatch(searchUserAction(value))
        else
            dispatch(searchCarAction(value))

    }
    const onClick = () => {
        if (search === 'users')
            setSearch('cars')
        else
            setSearch('users')
    }

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem', display: 'flex'}}>
                <input type="text" style={{width: '90%', height: '2rem'}} value={value} onChange={onChange}/>
                <CommonBtn height='2rem' position='static' cords='0, 0' width='10%' type='submit' onClick={onSubmit}>
                    search
                </CommonBtn>
            </div>
            <button onClick={onClick}>{search}</button>
            <div>
                {
                    search === 'users'
                        ? users.map((user, i) =>
                            user.username === auth ? null : <UserCardMini user={user} key={user.id / i}/>)
                        : cars.map((car, i) =>
                            car.owner === auth ? null : <CarMiniCard key={car.id / i} car={car}/>)
                }
            </div>
        </div>
    );
};