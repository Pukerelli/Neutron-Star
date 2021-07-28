import React from 'react';
import {CarNoteMini} from "./NoteCard/CarNoteMini.component";
import {NotesLayout} from "../../../../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import {ICar} from "../../../../../../common/interfaces/index.interface";

interface IProps {
    car: ICar
    handler: (noteId: string) => void
}

export const CarNotes: React.FC<IProps> = ({car, handler}) => {
    return (
        <NotesLayout>
            {car.notes.map((note, i) => <CarNoteMini key={note!._id} car={car._id} note={note} handler={handler}/>)}
        </NotesLayout>
    );
};

