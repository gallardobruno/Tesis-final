import { createSlice } from "@reduxjs/toolkit";

export const originSlice = createSlice({
    name:'misValores',
    initialState:{
        estadoEtapa:'noIniciada',
    },
    reducers:{
        añadirEtapa:(state,action)=>{
            state.estadoEtapa=action.payload;
        },
    },
})

export const {añadirEtapa} = originSlice.actions