import React from 'react';
import {GridLayout} from "../../../../../styles/StyledComponents/Layout/GridLayout.styledComponent";
import {ICar} from "../../../../../common/interfaces/common-interfaces/index.interface";
import {ImgSimple} from "../../../../../styles/StyledComponents/Images/ImgSimple.styledComponent";
import {defaultImage} from '../../../../../common/images/images';
import {CarMiniInfo} from "../CarInfo/CarMiniInfo.component";
import {useHistory} from "react-router-dom";
import {FollowBtn} from "../../../../Common/Buttons/FollowBtn.component";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../../selectors/auth/auth.selector";
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButton.styledComponent';
import {useAppDispatch} from "../../../../../store";
import {carDeleteAction, carFollowAction, carUnfollowAction} from "../../../../../store/actions/car.action";

interface IProps {
    car: ICar
    isFetching: boolean
    path?: string
    btn?: boolean
}

export const CarMiniCard: React.FC<IProps> = ({car, isFetching, path, btn = true}) => {
    const auth = useSelector(selectAuthUser)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const onClick = () => {
        if (path) {
            history.push(path)
        } else {
            history.push(`/profile/cars/about/${car.name}`)
        }
    }
    const onDeleteClick = () => {
        dispatch(carDeleteAction(car.name))
    }
    if (isFetching) {
        return <div>loading</div>
    }
    return (
        <div style={{position: 'relative'}}>
            {
                btn ?
                    auth === car.owner ?
                        <CommonBtn height='2rem' width='4rem' top='10%' right='105%'
                                   onClick={onDeleteClick}>delete</CommonBtn>
                        : <FollowBtn btnStyle={{height: '2rem', width: '4rem', top: '10%', right: '105%'}}
                                     followedBy={car.followedBy}
                                     followAction={carFollowAction} unFollowAction={carUnfollowAction}
                                     payload={car.name}
                        />
                    : null
            }
            <GridLayout width='100%' gridColumns='8fr 2fr' height='5rem'
                        margin='0 0 1rem 0' onClick={onClick}>
                <CarMiniInfo car={car}/>
                <ImgSimple minHeight='none' src={car.photo ? car.photo : defaultImage}/>
            </GridLayout>
        </div>
    );
};
