import React from "react";
import { NavLink } from "react-router";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header = ({ cartItems = [], favoriteItems = [] }) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="logo">
          <NavLink to="/">
          <img src="..\dist\assets\ZAL.DE_BIG.svg" alt="#" className="logo_zalando" />
          
          </NavLink>
        </h1>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li> <a href="#footer">Info & Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <NavLink to="/favorites" className="icon-link">
          <FaHeart /> ({favoriteItems.length})
        </NavLink>

        <NavLink to="/cart" className="icon-link">
          <FaShoppingCart /> ({cartItems.length})
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
