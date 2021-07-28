import React from 'react';
import {INote} from "../../../../../../../common/interfaces/index.interface";
import {useAppDispatch} from "../../../../../../../store";
import {carNotePullAction} from "../../../../../../../store/actions/car.action";
import {
    NoteCard,
    NoteDeleteBtn,
    NotesTitle
} from "../../../../../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import {Subtitle} from '../../../../../../../styles/StyledComponents/Common/Common.styledComponents';

interface IProps{
    note: INote | null
    car: string
    handler: (noteId: string) => void
}

export const CarNoteMini: React.FC<IProps> = ({note, car, handler}) => {
    const dispatch = useAppDispatch()
    const onClick = () => {
        handler(note!._id)
    }
    const onDeleteClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        dispatch(carNotePullAction({_id: note!._id, car: car}))
    }
    return (
        <NoteCard onClick={onClick}>
            <div></div>
            <NotesTitle>{note!.title}</NotesTitle>
            <Subtitle>{note!.date}</Subtitle>
            <NoteDeleteBtn onClick={onDeleteClick}>x</NoteDeleteBtn>
        </NoteCard>

    );
};

