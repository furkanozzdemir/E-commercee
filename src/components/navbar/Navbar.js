import React, { useState } from "react";
import "./NavbarStyle.css";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(setSearchKeyword(searchTerm));
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div>
            <h1 className="nav-h1">Let's shopp...</h1>
          </div>
          <div className="form-div">
            <input
              className="form-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="form-btn" onClick={handleSearch}>
              search
            </button>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Products</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

