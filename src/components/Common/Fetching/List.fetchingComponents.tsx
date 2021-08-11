import React from "react";
import {
    ProfileLayout, SearchColumn,
    SubscriptionsColumn
} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ListToggle, ListToggleContainer} from "../../../styles/StyledComponents/Common/List.styledComponent";
import {AvatarBlockFetching, CardsFetching, CommonFetching} from "./Common.fetchingComponents";

export const ListFetching: React.FC = () => (
    <ProfileLayout>
        <SubsFetching/>
        <AvatarBlockFetching/>
    </ProfileLayout>
)

const SubsFetching: React.FC = () => (
    <SubscriptionsColumn>
        <ListToggleContainer>
            <ListToggle marginLeft={true}>Users</ListToggle>
            <ListToggle>Cars</ListToggle>
        </ListToggleContainer>
        <CardsFetching/>
    </SubscriptionsColumn>
)
export const SearchFetching: React.FC = () => (
    <>
        <ListToggleContainer>
            <ListToggle marginLeft={true}>Users</ListToggle>
            <ListToggle>Cars</ListToggle>
        </ListToggleContainer>
        <CardsFetching/>
    </>
)