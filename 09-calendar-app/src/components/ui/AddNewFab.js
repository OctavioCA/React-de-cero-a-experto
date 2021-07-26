import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
    
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
        // Arregla el bug de cuando tenemos un seleccionado un evento
        // y tocamos el botón de añadir tiene el evento activo y no uno nuevo
        dispatch( eventClearActiveEvent() );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus" ></i>
            
        </button>
    )
}
