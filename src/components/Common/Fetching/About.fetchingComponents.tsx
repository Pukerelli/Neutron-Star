import React from "react";
import {
    AboutCarAvatarColumn,
    AboutCarColumn,
    AboutLayout
} from "../../../styles/StyledComponents/Cars/AboutCar/AboutCarLayout.styledComponent";
import {NotesLayout} from "../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import ContentLoader from "react-content-loader";
import {WhiteCard} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {NoteLayout} from "../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";

export const CarFetching: React.FC = () => (
    <AboutLayout>
        <CarDescriptionFetching/>
        <CarAvatarFetching/>
        <NotesLayout>
            <CarNotesFetching/>
        </NotesLayout>
    </AboutLayout>
)

export const CarNoteFetching: React.FC = () => (
    <NoteLayout>
        <WhiteCard padding='15px' width='600px' height='450px' margin='0 auto'>
            <ContentLoader height='100%' width='100%'>
                <rect x="50" y="2" rx="5" ry="5" width="470" height='35'/>
                <rect x="0" y="70" rx="5" ry="5" width="100%" height='300'/>
                <rect x="450" y="390" rx="5" ry="5" width="120" height='20'/>
            </ContentLoader>
        </WhiteCard>
    </NoteLayout>
)

const CarAvatarFetching: React.FC = () => (
    <AboutCarAvatarColumn>
        <ContentLoader height='300' width='100%'>
            <rect x="0" y="0" rx="6" ry="6" width='100%' height='100%'/>
        </ContentLoader>
        <WhiteCard padding='10px' width='100%' height='80px'>
            <ContentLoader height='100%' width='100%'>
                <rect x="35" y="0" rx="5" ry="5" width="120" height='20'/>
                <rect x="300" y="0" rx="5" ry="5" width="120" height='20'/>
                <rect x="35" y="30" rx="5" ry="5" width="120" height='20'/>
            </ContentLoader>
        </WhiteCard>
    </AboutCarAvatarColumn>
)

const CarDescriptionFetching: React.FC = () => (
    <AboutCarColumn>
        <WhiteCard padding='7px 30px' width='100%' height='400px'>
            <ContentLoader height='100%' width='100%'>
                <rect x="70" y="5" rx="6" ry="6" width='130' height='35'/>
                <rect x="0" y="60" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="95" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="130" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="165" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="200" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="235" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="270" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="305" rx="5" ry="5" width="100%" height='20'/>
                <rect x="0" y="340" rx="5" ry="5" width="100%" height='20'/>
            </ContentLoader>
        </WhiteCard>
    </AboutCarColumn>
)

const CarNotesFetching: React.FC = () => (
    <WhiteCard padding='5px 25px' width='100%' height='35px'>
        <ContentLoader height='100%' width='100%'>
            <rect x="0" y="2" rx="5" ry="5" width="500" height='20'/>
            <rect x="600" y="2" rx="5" ry="5" width="130" height='20'/>
        </ContentLoader>
    </WhiteCard>
)