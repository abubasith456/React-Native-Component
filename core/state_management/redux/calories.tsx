import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ActivityLevel = 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive';

interface CaloriesState {
    age: string;
    isPickerOpen: boolean;
    isActivityPickerOpen: boolean;
    weight: string;
    height: string;
    gender: string;
    activityLevel: ActivityLevel;
    calories: number | null;
}

const initialState: CaloriesState = {
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activityLevel: 'sedentary',
    calories: 0,
    isPickerOpen: false,
    isActivityPickerOpen: false
}

const caloriesSlice = createSlice({
    name: "calories",
    initialState: initialState,
    reducers: {
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload
        },
        setweight: (state, action: PayloadAction<string>) => {
            state.weight = action.payload
        },
        setHeight: (state, action: PayloadAction<string>) => {
            state.height = action.payload
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload
        },
        setActivityLevel: (state, action: PayloadAction<ActivityLevel>) => {
            state.activityLevel = action.payload
        },
        setCalories: (state, action: PayloadAction<number>) => {
            state.calories = action.payload
        },
        setIsPickerOpen: (state) => {
            state.isPickerOpen = !state.isPickerOpen;
        },
        setIsActivityPickerOpen: (state) => {
            state.isActivityPickerOpen = !state.isActivityPickerOpen
        },
    }
});

export default caloriesSlice.reducer;

export const { setAge, setweight, setHeight, setGender,
    setActivityLevel, setCalories, setIsPickerOpen, setIsActivityPickerOpen } = caloriesSlice.actions