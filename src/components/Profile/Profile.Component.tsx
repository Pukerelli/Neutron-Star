import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {ContentLayout, Layout } from '../../styles/StyledComponents/Layout/Layout.styledComponent';
import {NavBar} from "../Common/NavBar/NavBar.component";
import {UserProfile} from "./UserProfile/UserProfile.component";



export const Profile = () => {
    // the symbol '/' separate link name and link path
    const navBar = ['profile/user', 'album', 'following']

    return (
        <Layout>
            <NavBar  address={'profile'} navBar={navBar}/>
            <ContentLayout gridColumn='1fr'>
                <Switch>
                    <Route path={['/profile/user/:username', '/profile/user']}>
                        <UserProfile/>
                    </Route>

                    <Route path={['/profile/album/:username', '/profile/album']}>
                        <div>album</div>
                    </Route>

                    <Route path={'/profile/following'}>
                        <div>following</div>
                    </Route>
                </Switch>
            </ContentLayout>
        </Layout>
    );
};

