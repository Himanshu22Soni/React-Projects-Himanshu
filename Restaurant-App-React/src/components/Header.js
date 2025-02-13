import React, { useState } from "react";
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
            <b>Home 🏠</b>
          </li>
          <li>
            <b>About Us 🏛️</b>
          </li>
          <li>
            <b>Contact Us 📞</b>
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
