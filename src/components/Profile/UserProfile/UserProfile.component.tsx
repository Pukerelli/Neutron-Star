import React from 'react';
import {ContentLayout, Layout} from '../../../styles/StyledComponents/Layout/Layout.styledComponent';
import {NavBar} from "../../Common/NavBar/NavBar.component";
import {UserCard} from "./UserCard.component";

export const UserProfile = () => {
    const navBar = ['profile', 'messages', 'album', 'following', 'bookmarks']
    return (
        <Layout>
            <NavBar navBar={navBar}/>
            <ContentLayout gridColumn='1fr'>
                <UserCard/>
            </ContentLayout>
        </Layout>
    );
};

