import { configureStore, createSlice } from "@reduxjs/toolkit";


const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    removeExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;

export const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});
