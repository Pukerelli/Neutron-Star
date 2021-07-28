import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GaragePage} from './Garage/GaragePage.component';
import {AboutCarPage} from "./AboutCar/AboutCarPage.component";
import {CarAddNote} from "./AboutCar/Notes/CarAddNote.component";
import {AddCar} from "./NewCar/AddCar.component";


export const Car: React.FC = () => {
    return (
        <Switch>
            <Route path='/profile/cars/garage/:username?'>
                <GaragePage/>
            </Route>
            <Route path='/profile/cars/about/:carname'>
                <AboutCarPage/>
            </Route>
            <Route path='/profile/cars/add/note/:carname?'>
                <CarAddNote/>
            </Route>
            <Route path='/profile/cars/add'>
                <AddCar/>
            </Route>
        </Switch>
    );
};
