import React from 'react';
import {INote} from '../../../../../common/interfaces/common-interfaces/index.interface';
import {MyCard} from "../../../../../styles/StyledComponents/Cards/MyCard";
import config from '../../../../../common/config/config.json'
import {CommonBtn} from '../../../../../styles/StyledComponents/Buttons/CommonButton.styledComponent';
import {useState} from 'react';
import {CarEditNote} from "./CarEditNote.component";
import {useSelector} from "react-redux";
import {selectCurrentNote} from "../../../../../selectors/Cars/Car.selector";

interface IProps {
    note: INote
    handler: () => void
}

export const CarNote: React.FC<IProps> = ({note, handler}) => {
        const [edit, toggleEdit] = useState(false)
        const currentNote = useSelector(selectCurrentNote(note._id))
        const onEditClick = () => {
            toggleEdit(!edit)
        }

        return (
            <MyCard boxShadow={true} textAlign='center' color={config.color}>
                {
                    edit
                        ? <CarEditNote note={currentNote!} cancelHandler={onEditClick}/>
                        : <><h2>{currentNote!.title}</h2>
                            <p>{currentNote!.description}</p>
                            <p>{currentNote!.date}</p>
                            <CommonBtn width='20%' height='2rem' onClick={() => handler()}>
                                back
                            </CommonBtn>
                            <CommonBtn width='20%' height='2rem' position='static' onClick={onEditClick}>
                                edit
                            </CommonBtn></>
                }

            </MyCard>
        );
    }
;




