import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GaragePage} from './Garage/GaragePage.component';
import {AboutCarPage} from "./AboutCar/AboutCarPage.component";
import {AddNote} from "./Note/Add/AddNote.component";
import {AddCar} from "./Add/AddCar.component";
import {CarNotePage} from "./Note/CarNotePage.component";


export const Car: React.FC = () => {
    return (
        <Switch>
            <Route path='/profile/cars/garage/:username?'>
                <GaragePage/>
            </Route>
            <Route path='/profile/cars/about/:carname'>
                <AboutCarPage/>
            </Route>
            <Route path='/profile/cars/note/:note?'>
                <CarNotePage/>
            </Route>
            <Route path='/profile/cars/add/note/:carname?'>
                <AddNote/>
            </Route>
            <Route path='/profile/cars/add'>
                <AddCar/>
            </Route>
        </Switch>
    );
};
