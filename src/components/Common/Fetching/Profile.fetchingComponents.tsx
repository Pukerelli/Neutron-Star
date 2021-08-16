import React from "react";
import {
    ProfileLayout,
    UserAboutCarsContainer,
    UserAboutColumn
} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserDescription} from "../../../styles/StyledComponents/Profile/Description/UserDescription.styledComponents";
import ContentLoader from "react-content-loader";
import {AvatarBlockFetching, CommonFetching} from "./Common.fetchingComponents";
import {WhiteCard} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {UserCars} from "../../../styles/StyledComponents/Profile/Cars/UserCars.styledComponents";

export const ProfileFetching: React.FC = () => (
    <ProfileLayout>
        <UserAboutColumn>
            <ProfileDescriptionFetching/>
            <ProfileCarsFetching/>
        </UserAboutColumn>
        <AvatarBlockFetching/>
    </ProfileLayout>
)

const ProfileDescriptionFetching: React.FC = () => (
    <UserDescription>
        <ContentLoader height='195' width='100%'>
            <rect x="0" y="0" rx="5" ry="5" width="25%" height='35'/>
            <rect x="15" y="45" rx="5" ry="5" width="90%" height='20'/>
            <rect x="15" y="75" rx="5" ry="5" width="90%" height='20'/>
            <rect x="15" y="105" rx="5" ry="5" width="90%" height='20'/>
            <rect x="15" y="135" rx="5" ry="5" width="90%" height='20'/>
            <rect x="15" y="165" rx="5" ry="5" width="90%" height='20'/>
        </ContentLoader>
    </UserDescription>
)

const ProfileCarsFetching: React.FC = () => (
    <UserAboutCarsContainer>
        <CommonFetching width='100%' height='40px'/>
        <UserCars>
            <ProfileCarCardFetching/>
            <ProfileCarCardFetching/>
        </UserCars>
    </UserAboutCarsContainer>
)

const ProfileCarCardFetching: React.FC = () => (
    <>
        <WhiteCard padding='14px' width='100%' height='120px'>
            <ContentLoader height='100%' width='100%'>
                <rect x="0" y="0" rx="6" ry="6" width='250' height='35'/>
                <rect x="0" y="45" rx="5" ry="5" width="200" height='20'/>
                <rect x="0" y="75" rx="5" ry="5" width="200" height='20'/>
            </ContentLoader>
        </WhiteCard>
        <ContentLoader height='120' width='100%'>
            <rect x="0" y="0" rx="6" ry="6" height='120' width='100%'/>
        </ContentLoader>
    </>
)