import React from "react";
import "./style.css";

import Logo from "../../assets/face.png";
import Profile from "../../assets/profile.png";

const Header = () => (
  <header>
    <h1>
      <a href="/">
        <img width="200" src={Logo} alt="facebook" />
      </a>
    </h1>
    <div className="submenu">
      <h2>Meu Perfil</h2>
      <img src={Profile} alt="" />
    </div>
  </header>
);

export default Header;
