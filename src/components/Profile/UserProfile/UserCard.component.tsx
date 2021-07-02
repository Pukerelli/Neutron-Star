import React, {useState} from 'react';
import {GridLayout} from '../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {UserAvatar} from "../../Common/Avatar/UserAvatar.component";
import {UserInfo} from "./UserInfo/UserInfo";
import {CarSlider} from "../../Common/cars/CarSlider.component";
import {CommonBtn} from '../../../styles/StyledComponents/Buttons/CommonButton.styledComponent';
import {AddCar} from "../../Cars/addCar/AddCar.component";
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";
import {useSelector} from "react-redux";
import {selectUserProfile} from "../../../selectors/Profile/UserProfile.selector";
import {selectCars} from "../../../selectors/Cars/Car.selector";

interface IProps {
    auth: string | null
}

export const UserCard: React.FC<IProps> = ({auth}) => {
    const user = useSelector(selectUserProfile)
    const cars = useSelector(selectCars)

    const [addCar, setAddCar] = useState(false)
    const onClick = () => {
        setAddCar(!addCar)
    }
    return (

        <GridLayout width='100%' gridColumns='1fr 1fr 1fr' gridGap='1rem'>
            {auth === user.username ? <CommonBtn height='2rem' width='10%' top='5%' color='#EB3649' onClick={onClick}>
                {addCar ? 'cancel' : 'add car'}
            </CommonBtn> : null}
            {
                addCar
                    ? <AddCar/>
                    : <>
                        <UserAvatar user={user}/>
                        <UserInfo user={user}/>
                        {cars.length
                            ? <CarSlider height='50vh' width='inherit'/>
                            : <>
                                <MyCard boxShadow={true}>
                                    <h1>mda</h1>
                                </MyCard>
                            </>
                        }
                    </>
            }
        </GridLayout>
    );
}
