import React from 'react';
import {ContentLayout, Layout} from '../../../styles/StyledComponents/Layout/Layout.styledComponent';
import {NavBar} from "../../Common/NavBar/NavBar.component";
import {Card} from '../../../styles/StyledComponents/Cards/Card'
import {UserCard} from "./UserCard.component";

export const UserProfile = () => {
    const navBar = ['Profile', 'Messages', 'Link', 'Link', 'Link', 'Link']

    return (
        <Layout>
            <NavBar navBar={navBar}/>
            <ContentLayout gridColumn='1fr'>
                <UserCard/>
            </ContentLayout>


        </Layout>
    );
};

