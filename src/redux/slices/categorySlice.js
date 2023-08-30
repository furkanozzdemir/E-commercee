import { createSlice } from "@reduxjs/toolkit";
export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: null,
  },
  reducers: {
    setCategory: (state, categoryName) => {
      state.value = categoryName.payload;
    },
    setNull: (state) => {
      state.value = null;
    },
  },
});

export const { setCategory, setNull } = categorySlice.actions;

export default categorySlice.reducer;
