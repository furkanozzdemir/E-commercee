import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productDetail.css"
function ProductDetail() {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-main-div">
      <div className="product-detail-main-container">
        <div  className="product-detail-img-div">
          <img className="product-detail-img" src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="p-description">{product.description}</p>
          <p>Price: {product.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
