import React from "react";
import {
    ProfileLayout, SearchColumn,
    SubscriptionsColumn
} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {ListToggle, ListToggleContainer} from "../../../styles/StyledComponents/Common/List.styledComponent";
import {AvatarBlockFetching, CardsFetching, CommonFetching} from "./Common.fetchingComponents";

export const ListFetching: React.FC<{ search?: boolean }> = ({search}) => (
    <ProfileLayout>
        {search ? <SearchFetching/> : <SubsFetching/>}
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
const SearchFetching: React.FC = () => (
    <SearchColumn>
        <CommonFetching width='530px' height='40px'/>
        <ListToggleContainer>
            <ListToggle marginLeft={true}>Users</ListToggle>
            <ListToggle>Cars</ListToggle>
        </ListToggleContainer>
        <CardsFetching/>
    </SearchColumn>
)