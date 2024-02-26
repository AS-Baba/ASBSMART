import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductItems } from "../../../features/Product/ProductSlice";
import { useParams } from "react-router-dom";

export const getSingleProduct = createAsyncThunk(
    "viewProduct/getSingleProduct",
    async (id) => {
        const response = await productServices.loadItem(id);
        // console.log(response);
        return response.data;
    }
    );
    const initialState = {
        singleProduct: [],
    };
    
    export const viewProductSlice = createSlice({
  name: "viewProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductItems.fulfilled, (state, { payload }) => {
      // console.log("from getsingle", payload);
      state.singleProduct = payload
    });
    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.find((item) => item.id === payload.id);
      // console.log("fulfiled from getSingle item",payload)
    });
  },
});
// console.log(viewProductSlice);

export default viewProductSlice.reducer;
