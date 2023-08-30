import React from "react";
import { useSelector } from "react-redux";
import "./basketSidebarStyle.css";
const SidebarBasket = () => {
  const products = useSelector((state) => state.basket.value);

  const totalAmount = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="Basket-sidebar">
      <div>
        <h2>Sepet</h2>
      </div>
      <div className="basket-list-div">
        {products.map((product) => (
          <div className="basket-sidebar-products" key={product.id}>
            <ul className="basket-sidebar-list">
              <li className="basket-li">
                <div className="basket-sidebar-list-div">
                  <p className="basket-sidebar-p">{product.title}</p>

                  <p className="basket-sidebar-p">Fiyat: {product.price}</p>
                </div>
              </li>
              <br></br>
            </ul>
          </div>
        ))}
      </div>
      <div className="basket-sidebar-price">
        {" "}
        <h2>Toplam Fiyat: {totalAmount.toFixed(2)} TL</h2>
      </div>

      <br></br>
      <div className="basket-sidebar-buy-div">
        <button className="basket-sidebar-btn">Satın Al</button>
      </div>
    </div>
  );
};

export default SidebarBasket;
