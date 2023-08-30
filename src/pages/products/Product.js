// pages/products/Product.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import ProductCard from "../../components/product/ProductCard";
import "./productStyle.css"

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const searchKeyword = useSelector((state) => state.product.searchKeyword);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      dispatch(setProducts(res.data));
    });
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="product-section ">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Product;


