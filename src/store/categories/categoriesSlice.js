import { createSlice } from '@reduxjs/toolkit';


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        isLoadingCategories: true, 
        categories: [],
        errorMessage: undefined,
    },
    reducers: {
        onCheckingCategories: ( state ) => {
            state.isLoadingCategories = true;
            state.categories = [];
            state.errorMessage = undefined;
        },
        onLoadCategories: ( state , { payload = [] }) => { 
            console.log(payload)
            state.isLoadingCategories = false;
            state.categories   = payload;
            state.errorMessage = undefined;
        },
        onSetActiveCategory: ( state, { payload }) => {
            state.activeCategory = payload;
        },
        onAddNewCategory: ( state, { payload }) => {
            state.events.push( payload );
            state.activeCategory = null;
        },
        onUpdateCategory: ( state, { payload } ) => {
            state.events = state.events.map( event => {
                if ( event._id === payload._id ) {
                    return payload;
                }

                return event;
            });
        },
        onDeleteCategory: ( state ) => {
            if ( state.activeCategory ) {
                state.events = state.events.filter( event => event._id !== state.activeCategory._id );
                state.activeCategory = null;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { onCheckingCategories, onLoadCategories } = categoriesSlice.actions;