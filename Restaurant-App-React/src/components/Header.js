import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../public/FoodLogo.png";

const Header = () => {
  let btnName = "Login";
  const [loginBtnName, setLoginBtnName] = useState(btnName);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LogoImage} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <b>Home 🏠</b>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <b>About Us 🏛️</b>
            </Link>
          </li>
          <li>
            <Link to="/contactUs">
              <b>Contact Us 📞</b>
            </Link>
          </li>
          <li>
            <b>Cart 🛒</b>
          </li>
          <button
            onClick={() => {
              loginBtnName === "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
            className="login"
          >
            {loginBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
