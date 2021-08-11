import React from 'react';
import {Route, Switch} from "react-router-dom";
import {SearchPage} from "./components/Seacrh/SearchPage.component";
import {NotFound} from './components/Common/NotFound/NotFound.component';
import {UserProfilePage} from "./components/Profile/User/UserProfilePage.component";
import {SubscriptionsPage} from "./components/Profile/Subscriptions/SubscriptionsPage.component";
import {GaragePage} from "./components/Profile/Car/Garage/GaragePage.component";
import {AboutCarPage} from "./components/Profile/Car/About/AboutCarPage.component";
import {CarNotePage} from "./components/Profile/Car/Note/NotePage.component";
import {AddNote} from "./components/Profile/Car/Note/Add/AddNote.component";
import {AddCar} from "./components/Profile/Car/Add/AddCar.component";
import {Login} from "./components/Auth/Login/Login.component";
import {Registration} from "./components/Auth/Registration/Registration.component";

interface IProps {
    notFoundHandler: (toggle: boolean) => void
}

export const Routes: React.FC<IProps> = ({notFoundHandler}) => {
    return (
        <Switch>
            <Route exact path={['/profile/user/:username?', '/']}>
                <UserProfilePage/>
            </Route>
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
            <Route path={'/profile/subscriptions'}>
                <SubscriptionsPage/>
            </Route>
            <Route path='/search'>
                <SearchPage/>
            </Route>
            <Route path='/auth/login'>
                <Login/>
            </Route>
            <Route path='/auth/registration'>
                <Registration/>
            </Route>
            <Route>
                <NotFound handler={notFoundHandler}/>
            </Route>
        </Switch>
    );
};
