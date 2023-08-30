import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../../redux/slices/basketSlice";
import ProductCard from "../product/ProductCard";
import BasketSidebar from "./BasketSidebar";
import "./basket.css";

const Basket = () => {
  const products = useSelector((state) => state.basket.value); // Redux store'daki ürünleri al
  const dispatch = useDispatch();
  const removeItem = (productId) => {
    dispatch(removeFromBasket(productId));
  };
  const uniqueBasketItems = products.reduce((accumulator, current) => {
    if (!accumulator[current.id]) {
      accumulator[current.id] = current;
    } else {
      accumulator[current.id].quantity += current.quantity;
    }
    return accumulator;
  }, {});

  const uniqueProducts = Object.values(uniqueBasketItems);
  const totalAmount = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="base-basket-div">
      <div className="main-basket-div">
        {uniqueProducts.length === 0 ? (
          <h1>
            Sepetinizde ürün bulunamamaktadır. Lütfen sepete ürün ekleyiniz
          </h1>
        ) : (
          uniqueProducts.map((product) => (
            <div className="basketCard-div" key={product.id}>
              <div className="product-title">
                <h3>{product.title}</h3>
              </div>
              <div>
                <img
                  className="product-img"
                  src={product?.image}
                  alt="product"
                />
              </div>
              <div className="product-price">{product?.price} $</div>
              <button
                className="basket-btn-delete"
                onClick={() => removeItem(product.id)}
              >
                delete
              </button>
            </div>
          ))
        )}
      </div>
      <div>
        <BasketSidebar />
      </div>
    </div>
  );
};

export default Basket;
