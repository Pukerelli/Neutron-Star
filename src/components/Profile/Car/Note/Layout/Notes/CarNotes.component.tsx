import React from 'react';
import {CarNoteMini} from "./CarNoteMini.component";
import {NotesLayout} from "../../../../../../styles/StyledComponents/Cars/AboutCar/NotesLayout.styledComponents";
import {ICar} from "../../../../../../common/interfaces/index.interface";
import {useHistory} from "react-router-dom";
import {useAppDispatch} from "../../../../../../store";
import {carNotePullAction} from "../../../../../../store/actions/car.action";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../../../../../selectors/auth/auth.selector";

interface IProps {
    car: ICar
}

export const CarNotes: React.FC<IProps> = ({car}) => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const auth = useSelector(selectAuthUser)

    const onDeleteClick = (_id: string, car: string, owner: string) => {
        if(auth === owner)
        dispatch(carNotePullAction({_id, car}))
    }

    const onNoteClick = (id: string) =>
        history.push(`/notes/note/${id}`)

    return (
        <NotesLayout>
            {car.notes.map((note) =>
                <CarNoteMini auth={auth} key={note!._id} carname={car._id}
                             onDeleteNoteClick={onDeleteClick} note={note}
                             owner={car.owner} onNoteClick={onNoteClick}/>)}
        </NotesLayout>
    );
};

