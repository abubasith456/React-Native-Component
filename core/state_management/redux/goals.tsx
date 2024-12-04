//Slice
import { createSlice, nanoid } from '@reduxjs/toolkit'

export type Goal = {
    text: string;
    id: string;
};

const initialState: Goal[] = []; //Initial state

//This function creates a slice of the Redux store with a name, initial state, and reducers.
const goalSlice = createSlice({
    name: "goals", //The name of the slice. It's used to identify the slice in the Redux store and in action types (e.g., goals/addGoal).
    initialState: initialState, //The initial state is set to the empty array defined earlier.
    reducers: {
        //An object containing functions that define how the state is updated for specific actions. 
        //Each function becomes an action creator and a reducer.
        addGoal: (state, action) => { //Accepts the current state and an action.
            const { text } = action.payload;
            state.push({ text, id: nanoid() });
        },
        removeGoal: (state, action) => {
            const { id } = action.payload;
            state.splice(state.indexOf(id), 1);
        }
    },
});

//The reducer function for this slice is exported. 
//It handles changes to the state based on the dispatched actions (addGoal and removeGoal).
export default goalSlice.reducer;

//Redux Toolkit automatically generates action creators for each reducer.
export const { addGoal, removeGoal } = goalSlice.actions;