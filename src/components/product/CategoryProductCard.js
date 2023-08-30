import React from "react";
import { useDispatch } from "react-redux";
import { setBasket, setEmpty } from "../../redux/slices/basketSlice";
import { useSelector } from "react-redux";
function CategoryProductCard({ baseProducts }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="product-div" key={baseProducts?.id}>
        <div className="product-title">
          {baseProducts?.title.length > 35
            ? baseProducts?.title.substring(0, 35) + "..."
            : baseProducts?.title}
        </div>
        <div>
          <img
            className="product-img"
            src={baseProducts?.image}
            alt="product"
          />
        </div>

        <div className="product-price">{baseProducts?.price} $</div>
        <div>{baseProducts?.category}</div>
        <div>
          <button
            className="product-btn"
            onClick={() => dispatch(setBasket(baseProducts))}
          >
            add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCard;
