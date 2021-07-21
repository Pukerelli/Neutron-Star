import React from 'react';
import {Route, Switch} from "react-router-dom";
import { UserSearch } from './UserSearch/UserSearch.component';
import { UsersFollowed } from './UsersFollowed/UsersFollowed.component.';
import {UserProfile} from "./UserProfile/UserProfile.component";

export const User = () => {
    return (
        <Switch>
            <Route path={['/profile/user/:username?', '/profile']}>
                <UserProfile/>
            </Route>
            <Route path={['/profile/album/:username', '/profile/album']}>
                <div>album</div>
            </Route>
            <Route path={'/profile/following'}>
                <UsersFollowed/>
            </Route>
            <Route path={'/profile/search'}>
                <UserSearch/>
            </Route>
        </Switch>
    );
};

