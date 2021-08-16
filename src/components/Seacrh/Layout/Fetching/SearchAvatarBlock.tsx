import React from "react";
import {AvatarBlockFetching} from "../../../Common/Fetching/Common.fetchingComponents";
import {UserAvatarColumn} from "../../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";
import {UserAvatarBlock} from "../../../Profile/User/Layout/Avatar/Block/UserAvatarBlock.component";
import {IUser} from "../../../../common/interfaces/index.interface";

interface IProps {
    user: IUser
    auth: string
    isFetching: boolean
}

export const SearchAvatarBlock: React.FC<IProps> = ({user, auth, isFetching}) => {
    if (auth === 'unauthorized')
        return null
    if (isFetching)
        return <AvatarBlockFetching/>
    return (
        <UserAvatarColumn>
            <UserAvatarBlock user={user} auth={auth}/>
        </UserAvatarColumn>
    )
}

