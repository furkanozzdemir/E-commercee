import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import basketReducer from "./slices/basketSlice";
import productReducer from "./slices/productSlice";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore(
  {
    reducer: {
      category: categoryReducer,
      basket: basketReducer,
      product:productReducer,
    },
  },
  composeWithDevTools()
);
