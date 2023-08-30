import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import './mainHome.css';

function MainHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <div className="home">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Haftanın Ürünleri</h2>
      </div>
      <div className="featured-products-section" style={{ width: '1000px' }}>
        <Carousel indicators={false}>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <div className="product-card bg-white rounded p-4">
              <img
  className="main-home-img w-500 h-500" // İstenilen boyutları belirleyin
  src={product.image}
  alt={product.title}
/>

                <div className="product-details mt-2 text-center">
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-gray-600">Fiyat: {product.price}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MainHome;




