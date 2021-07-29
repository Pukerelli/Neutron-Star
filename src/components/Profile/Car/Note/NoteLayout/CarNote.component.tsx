import React, {useState} from 'react';
import {NoteCard, NoteLayout} from "../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import {ICurrentNote} from "../../../../../common/interfaces/index.interface";
import {NoteTextInner} from "./NoteInner/NoteTextInnter.component";
import {EditBtn} from "../../../../Common/Edit/EditBtn.component";
import {ButtonBack} from "../../../../Common/Buttons/BackButton/ButtonBack.component";
import {NoteForm} from "../Add/NoteForm.component";

interface IProps {
    onBackClick: () => void
    auth: string
    currentNote: ICurrentNote
    handler: (values: { title: string, description: string }) => void
}

export const CarNote: React.FC<IProps> = ({currentNote, onBackClick, handler, auth}) => {
    const [edit, toggleEdit] = useState(false)
    const onEditClick = () => toggleEdit(!edit)
    const onSubmit = (values: { title: string, description: string }) =>{
        handler(values)
        toggleEdit(false)
    }
    return (
        <NoteLayout>
            <NoteCard form={edit}>
                <ButtonBack onBackClick={onBackClick}/>
                <EditBtn toggle={onEditClick} edit={edit} display={auth === currentNote.owner}/>
                {
                    edit
                        ? <NoteForm note={currentNote} onSubmit={onSubmit}/>
                        : <NoteTextInner note={currentNote}/>
                }
            </NoteCard>
        </NoteLayout>
    );
};
