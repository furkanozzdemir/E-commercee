import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import man from "./person-solid.svg";
import jewellery from "./gem-solid.svg";
import house from "./house-chimney-solid.svg";
import electro from "./microchip-solid.svg";
import woman from "./person-dress-solid.svg";
import basket from "./basket.svg";
import { useDispatch } from "react-redux";
import { setCategory, setNull } from "../../redux/slices/categorySlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar-title-div">
        <h1 className="sidebar-title">Categories</h1>
      </div>

      <div className="category-div">
        <ul>
          <li onClick={() => dispatch(setNull())}>
            <div className="list-div home-div">
              <img className="list-svg home-svg" src={house} alt=""></img>
              <Link to="/">
                <span className="home-span">Home Page</span>
              </Link>
            </div>
          </li>
          <li onClick={() => dispatch(setCategory("men's clothing"))}>
            <div className="list-div">
              <img className="list-svg" src={man} alt=""></img>
              Man's clothing
            </div>
          </li>
          <li onClick={() => dispatch(setCategory("jewelery"))}>
            <div className="list-div">
              <img className="list-svg" src={jewellery} alt=""></img>
              Jewellery
            </div>
          </li>
          <li onClick={() => dispatch(setCategory("electronics"))}>
            <div className="list-div">
              <img className="list-svg" src={electro} alt=""></img>
              Electronics
            </div>
          </li>
          <li onClick={() => dispatch(setCategory("women's clothing"))}>
            <div className="list-div">
              <img className="list-svg" src={woman} alt=""></img>
              Women's clothing
            </div>
          </li>
        </ul>
      </div>

      <div className="basket-div">
        <img className="basket-svg" src={basket} alt=""></img>
     
        <Link to="/basket">BASKET</Link>
      </div>
    </div>
  );
}

export default Sidebar;
