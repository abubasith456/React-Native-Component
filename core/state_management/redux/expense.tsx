import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Expense = {
    date: string;
    id: string;
    description: string,
    amount: number
};

const initialState: Expense[] = []

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<Expense>) => {
            console.log('New Expense:', action.payload);
            return [...state, action.payload]; // Use spread operator to ensure immutability
        },
        updateExpense: (state, action: PayloadAction<{ id: string, updatedExpense: Partial<Expense> }>) => {
            const { id, updatedExpense } = action.payload
            const itemIndex = state.findIndex((expense) => expense.id === id);
            if (itemIndex !== -1) {
                state[itemIndex] = { ...state[itemIndex], ...updatedExpense };
            }
        },
        removeExpense: (state, action) => {
            const { id } = action.payload;
            console.log("removeExpense triggered: => " + id)
            // Find the index of the expense to remove
            const itemIndex = state.findIndex((expense) => expense.id === id);

            // If the item is found, remove it from the array
            if (itemIndex !== -1) {
                state.splice(itemIndex, 1);  // Removes the item at itemIndex
            }
        }
    }
});

export default expenseSlice.reducer;

export const { addExpense, updateExpense, removeExpense } = expenseSlice.actions;

