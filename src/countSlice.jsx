import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    clearCounter: (state) => {
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,clearCounter } = countSlice.actions;

export default countSlice.reducer;
