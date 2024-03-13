import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, categoriesSlice, calendarSlice, authSlice } from './';


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        categories: categoriesSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
