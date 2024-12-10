//ToolKit
import { configureStore } from '@reduxjs/toolkit'
import goalSlice from './goals';
import caloriesSlice from './calories';

export const store = configureStore({
    reducer: {
        goals: goalSlice,
        calories: caloriesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;