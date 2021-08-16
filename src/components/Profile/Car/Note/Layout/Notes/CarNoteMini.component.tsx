import React from 'react';
import {INote} from "../../../../../../common/interfaces/index.interface";
import {
    NoteCard,
    NoteDeleteBtn,
    NotesTitle
} from "../../../../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import {Subtitle} from '../../../../../../styles/StyledComponents/Common/Common.styledComponents';

interface IProps{
    note: INote | null
    carname: string
    onNoteClick: (noteId: string) => void
    onDeleteNoteClick: (id: string, car: string) => void
    auth: string
    owner: string
}

export const CarNoteMini: React.FC<IProps> = (props) => {
    const onDeleteClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        props.onDeleteNoteClick(props.note!._id, props.carname)
    }
    return (
        <NoteCard onClick={() => props.onNoteClick(props.note!._id)}>
            <NotesTitle>{props.note!.title}</NotesTitle>
            <Subtitle>{props.note!.date}</Subtitle>
            <NoteDeleteBtn onClick={onDeleteClick}>{props.auth === props.owner? 'x' : ''}</NoteDeleteBtn>
        </NoteCard>

    );
};

