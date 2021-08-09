import React from 'react';
import {CarNoteMini} from "./CarNoteMini.component";
import {NotesLayout} from "../../../../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {useHistory} from "react-router-dom";
import {useAppDispatch} from "../../../../../../store";
import {carNotePullAction} from "../../../../../../store/actions/car.action";

interface IProps {
    car: ICar
}

export const CarNotes: React.FC<IProps> = ({car}) => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const onDeleteClick = (_id: string, car: string) => dispatch(carNotePullAction({_id, car}))
    const onNoteClick = (id: string) => history.push(`/profile/cars/note/${id}`)

    return (
        <NotesLayout>
            {car.notes.map((note, i) =>
                <CarNoteMini key={note!._id} carname={car._id} onDeleteNoteClick={onDeleteClick}
                             note={note} onNoteClick={onNoteClick}/>)}
        </NotesLayout>
    );
};

