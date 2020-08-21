import React from "react";
import "./NavBarLogo.scss";

const NavBarLogo = () => {
  return (
        <div className="nav-logo">
            <a href="/" className="nav-logo__image" />
            <a href="https://google.com" className="nav-logo__primary">Samurai</a>
            <a href="/" className="nav-logo__secondary">Calc</a>
        </div>
  );
};

export default NavBarLogo;
