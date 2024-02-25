import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";
import {ServerUrl} from './ServerUrl'
import { Services } from "../../Components/ServicesFiles/Services";

export const productServices = new Services()
export const getProductItems = createAsyncThunk(
  "product/getProductItem",
  async () => {
    const response = await productServices.getItems();
    console.log(response)
    return response.data;
  }
);

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductItems.fulfilled, (state, { payload }) => {
      console.log("Her", payload);
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(getProductItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
console.log(productSlice);
// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
