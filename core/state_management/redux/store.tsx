//ToolKit
import { configureStore } from '@reduxjs/toolkit'
import goalSlice from './goals';
import caloriesSlice from './calories';
import expenseSlice from './expense';

export const store = configureStore({
    reducer: {
        goals: goalSlice,
        calories: caloriesSlice,
        expense: expenseSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;