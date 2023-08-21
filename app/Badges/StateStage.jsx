'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { añadirEtapa } from '../store/SliceOne';

export function StateStage() {
    // const dispatch = useDispatch();
    const state1 = useSelector(state => state.misValores.estadoEtapa);
    // {state1 === '' && dispatch(añadirEtapa('noIniciada'))}

  
    return (
        <div> 
            {
            state1 === 'noIniciada'
            ? <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">No Iniciada</span>
            : state1 === 'enProceso'
            ? <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-400 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">En Proceso</span>
            : state1 === 'completada'
            ? <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-500 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completada</span>
            : ''
            }
            {/* <span class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-400 dark:bg-opacity-10 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span> */}
        </div>
    );
}

