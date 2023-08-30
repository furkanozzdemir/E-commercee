import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/categories/Sidebar";
import Category from "./Category";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/Product" component={Category} />

        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}

export default App;
