import React from "react";

import "./categoryy.css";
import Sidebar from "./components/categories/Sidebar";
import CategoryProduct from "./pages/products/CategoryProduct";
function Category() {
  return (
    <div className="category-div">
      <div className="">
        <Sidebar />
      </div>
      <div className="category-product-div">
        <CategoryProduct />
      </div>
    </div>
  );
}

export default Category;
