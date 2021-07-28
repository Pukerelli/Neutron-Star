import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectCurrentNote} from "../../../../../../selectors/cars/car.selector";
import {
    NoteBtnBack,
    NoteDate,
    NoteDescription,
    NoteLayout
} from "../../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import { Name } from '../../../../../../styles/StyledComponents/Common/Common.styledComponents';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface IProps {
    noteId: string
    handler: () => void
}

export const CarNote: React.FC<IProps> = ({noteId, handler}) => {
    const [edit, toggleEdit] = useState(false)
    const currentNote = useSelector(selectCurrentNote(noteId))
    const onEditClick = () => {
        toggleEdit(!edit)
    }
    return (
        <NoteLayout>
            <NoteBtnBack onClick={() => handler()}>
                <ArrowBackIcon fontSize='large'/>
            </NoteBtnBack>
            <Name underline={true}>{currentNote!.title}</Name>
            <NoteDescription>
                {currentNote!.description}
            </NoteDescription>
            <NoteDate>
                {currentNote!.date}
            </NoteDate>
        </NoteLayout>
    );
}





