import React, {useState} from 'react';
import {GridLayout} from '../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {UserAvatar} from "../../Common/Avatar/UserAvatar.component";
import {UserInfo} from "./UserInfo/UserInfo";
import {CarSlider} from "../../Common/cars/CarSlider.component";
import {ICar, IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {TrnsprntBtn} from '../../../styles/StyledComponents/Buttons/transparentButton.styledComponent';
import {AddCar} from "../../Cars/addCar/AddCar.component";
import {MyCard} from "../../../styles/StyledComponents/Cards/MyCard";

interface IProps {
    user: IUser
    cars: Array<ICar>
}

export const UserCard: React.FC<IProps> = ({user, cars}) => {
    const [addCar, setAddCar] = useState(false)
    const onClick = () => {
        setAddCar(!addCar)
    }
    return (

        <GridLayout width='100%' gridColumns='1fr 1fr 1fr' gridGap='1rem'>
            <TrnsprntBtn height='2rem' width='10%' top='0' color='#EB3649' onClick={onClick}>
                {addCar ? 'cancel' : 'add car'}
            </TrnsprntBtn>
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
