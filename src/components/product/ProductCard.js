import React from "react";
import { Link } from "react-router-dom";
import "./productCardStyle.css"
function ProductCard({ product }) {
  return (
    <div className="product-div" key={product?.id}>
      <div className="product-title">
        {product?.title.length > 40
          ? product?.title.substring(0, 40)
          : product?.title}
      </div>
      <div>
        <img className="product-img" src={product?.image} alt="product" />
      </div>

      <div className="product-price">{product?.price} $</div>
      <div>{product?.category}</div>
      <div className="product-btn-container">
      <Link to={`/product/${product.id}`}>
          <button className="product-btn-container-btn">See Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;




