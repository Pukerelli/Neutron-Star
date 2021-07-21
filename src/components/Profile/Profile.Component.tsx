import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ContentLayout, Layout} from '../../styles/StyledComponents/Layout/Layout.styledComponent';
import {Navbar} from "../Common/Navbar/Navbar.component";
import style from "../../styles/common.module.css";
import {Car} from "./Car/Car.component";
import {User} from "./User/User.component";


export const Profile = () => {
    return (
        <Layout>
            <Navbar/>
            <ContentLayout gridColumn='1fr' overflow='scroll' className={style.scroll}>
                <Switch>
                    <Route path={'/profile/user'}>
                        <User/>
                    </Route>
                    <Route path={'/profile/cars'}>
                        <Car/>
                    </Route>
                </Switch>
            </ContentLayout>
        </Layout>
    );
};

