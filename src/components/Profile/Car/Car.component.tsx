import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Garage} from './Garage/Garage.component';
import {AboutCar} from "./AboutCar/AboutCar.component";
import {CarAddNote} from "./AboutCar/CarNote/CarAddNote.component";


export const Car: React.FC = () => {
    return (
        <Switch>
            <Route path='/profile/cars/garage/:username?'>
                <Garage/>
            </Route>
            <Route path='/profile/cars/about/:carname'>
                <AboutCar/>
            </Route>
            <Route path='/profile/cars/add/note/:carname?'>
                <CarAddNote/>
            </Route>
        </Switch>
    );
};
