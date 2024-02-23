import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products:[],
};
const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, clearCounter } =
  countSlice.actions;

export default countSlice.reducer;
