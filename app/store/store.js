import { configureStore } from '@reduxjs/toolkit';
import { originSlice } from './SliceOne';

export default configureStore({
    reducer:{
        misValores:originSlice.reducer,
    }
})