import React from 'react';
import {Name} from "../../../../../../styles/StyledComponents/Common/Common.styledComponents";
import {NoteDate, NoteDescription} from "../../../../../../styles/StyledComponents/Cars/Notes/NoteLayout.styledComponents";
import { ICurrentNote } from '../../../../../../common/interfaces/index.interface';

export const NoteTextInner: React.FC<{ note: ICurrentNote }> = ({note}) => {
    return (
        <>
            <Name underline={true}>{note.title}</Name>
            <NoteDescription>
                {note.description}
            </NoteDescription>
            <NoteDate>
                {note.date}
            </NoteDate>
        </>
    );
};