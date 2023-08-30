import React from "react";
import "./categoryProductStyle.css";
import CategoryProductCard from "../../components/product/CategoryProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function CategoryProduct() {
  const [baseProducts, setBaseProducts] = useState([]);
  const category = useSelector((state) => state.category.value);
  useEffect(() => {
    if (category === null) {
      axios("https://fakestoreapi.com/products").then((res) =>
        setBaseProducts(res.data)
      );
    } else {
      axios(`https://fakestoreapi.com/products/category/${category}`).then(
        (res) => setBaseProducts(res.data)
      );
    }
  }, [category]);
  return (
    <div className="category-product-section ">
      {baseProducts.map((product) => (
        <CategoryProductCard baseProducts={product} key={product.id} />
      ))}
    </div>
  );
}

export default CategoryProduct;
