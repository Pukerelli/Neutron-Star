import React from 'react';
import {INote} from "../../../../../common/interfaces/index.interface";
import {GridLayout} from '../../../../../styles/StyledComponents/Layout/GridLayout.styledComponent';
import {useAppDispatch} from "../../../../../store";
import {carNotePullAction} from "../../../../../store/actions/car.action";

interface IProps{
    note: INote | null
    car: string
    handler: (note: INote) => void
}

export const CarNoteMini: React.FC<IProps> = ({note, car, handler}) => {
    const dispatch = useAppDispatch()
    const onClick = () => {
        handler(note!)
    }
    const onDeleteClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        dispatch(carNotePullAction({_id: note!._id, car: car}))
    }
    return (
       <GridLayout width='50%' gridColumns='4fr 3fr 2fr' onClick={onClick}>
           <div>{note!.title}</div>
           <div>{note!.date}</div>
           <div onClick={onDeleteClick}>delete</div>
       </GridLayout>
    );
};

