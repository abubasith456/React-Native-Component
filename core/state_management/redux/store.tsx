//ToolKit
import { configureStore } from '@reduxjs/toolkit'
import goalSlice from './goals';

export const store = configureStore({
    reducer: {
        goals: goalSlice,
    }
});