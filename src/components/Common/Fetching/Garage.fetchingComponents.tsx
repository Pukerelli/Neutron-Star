import React from "react";
import {GarageCarsColumn, ProfileLayout} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {AvatarBlockFetching, CardFetching} from "./Common.fetchingComponents";
import {SelectLayout} from "../../../styles/StyledComponents/Cars/Garage/Garage.styledComponents";

export const GarageFetching: React.FC = () => (
    <ProfileLayout>
        <GarageCarsFetching/>
        <AvatarBlockFetching/>
    </ProfileLayout>
)

export const SelectCarsFetching: React.FC = () => (
    <SelectLayout>
        <GarageCarsFetching/>
    </SelectLayout>
)

const GarageCarsFetching: React.FC = () => (
    <GarageCarsColumn hideBtn={true}>
        <CardFetching/>
        <CardFetching/>
    </GarageCarsColumn>
)


