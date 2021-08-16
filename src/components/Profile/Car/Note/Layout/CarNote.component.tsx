import React from 'react';
import {NoteCard, NoteLayout} from "../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import {ICurrentNote} from "../../../../../common/interfaces/index.interface";
import {NoteTextInner} from "./NoteInner/NoteTextInnter.component";
import {EditBtn} from "../../../../Common/Buttons/Edit/EditBtn.component";
import {ButtonBack} from "../../../../Common/Buttons/BackButton/ButtonBack.component";
import {NoteForm} from "../Add/NoteForm.component";

interface IProps {
    onBackClick: () => void
    auth: string
    currentNote: ICurrentNote
    onSubmit: (values: { title: string, description: string }) => void
    toggleEdit: () => void
    edit: boolean
}

export const CarNote: React.FC<IProps> = (props) => (
    <NoteLayout>
        <NoteCard edit={props.edit}>
            <ButtonBack onBackClick={props.onBackClick}/>
            <EditBtn toggle={props.toggleEdit} edit={props.edit}
                     display={props.auth === props.currentNote.owner}/>
            {
                props.edit
                    ? <NoteForm note={props.currentNote} onSubmit={props.onSubmit}/>
                    : <NoteTextInner note={props.currentNote}/>
            }
        </NoteCard>
    </NoteLayout>
)
