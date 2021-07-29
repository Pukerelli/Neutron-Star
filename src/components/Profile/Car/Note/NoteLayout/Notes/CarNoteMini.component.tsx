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
}

export const CarNoteMini: React.FC<IProps> = ({note, carname, onNoteClick, onDeleteNoteClick}) => {
    const onDeleteClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        onDeleteNoteClick(note!._id, carname)
    }
    return (
        <NoteCard onClick={() => onNoteClick(note!._id)}>
            <div></div>
            <NotesTitle>{note!.title}</NotesTitle>
            <Subtitle>{note!.date}</Subtitle>
            <NoteDeleteBtn onClick={onDeleteClick}>x</NoteDeleteBtn>
        </NoteCard>

    );
};

