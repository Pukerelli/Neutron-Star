import React from 'react';
import {NavBar} from "../Common/NavBar/NavBar.component";
import {ContentLayout, Layout} from "../../styles/StyledComponents/Layout/Layout.styledComponent";
import {Route, Switch} from 'react-router-dom';
import {Garage} from './Garage/Garage.component';
import style from '../../styles/common.module.css'
import {CarMenu} from "./CarMenu/CarMenu.component";
import {AboutCar} from "./AboutCar/AboutCar.component";
import {FollowedCars} from "./FollowedCar/FollowedCars.component";
import { CarList } from './CarList/CarList.component';

export const Car: React.FC = React.memo(() => {
    const navBar = ['home', 'garage', 'search', 'followed']

    return (
        <Layout>
            <NavBar navBar={navBar} address={'cars'}/>
            <ContentLayout gridColumn='1fr' overflow='scroll' className={style.scroll}>
                <Switch>
                    <Route  path={'/cars/garage/:username?'}>
                        <Garage/>
                    </Route>
                    <Route path='/cars/about/:carname'>
                        <AboutCar/>
                    </Route>
                    <Route  path='/cars/search'>
                        <CarList/>
                    </Route>
                    <Route  path='/cars/followed'>
                        <FollowedCars/>
                    </Route>
                    <Route  path='/cars'>
                        <CarMenu/>
                    </Route>

                </Switch>
            </ContentLayout>
        </Layout>
    );
});
