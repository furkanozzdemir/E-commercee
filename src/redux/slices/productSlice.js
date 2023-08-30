// redux/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    searchKeyword: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { setProducts, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;

