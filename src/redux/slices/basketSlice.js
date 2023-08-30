import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [],
  },
  reducers: {
    setBasket: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    setEmpty: (state) => {
      state.value = [];
    },
    
    removeFromBasket: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },





  },
});
export const { setBasket, setEmpty,removeFromBasket} = basketSlice.actions;

export default basketSlice.reducer;
