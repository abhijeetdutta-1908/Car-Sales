import React from "react";
import "./salesDashboard.css";

const logoUrl = "https://ext.same-assets.com/215381300/4188841429.svg";

const Header = () => {
  return (
    <header className="cw-header">
      <div className="cw-header__logo">
        <a href="/">
          <img src={logoUrl} alt="CarWale logo" height="36" />
        </a>
      </div>
      <nav className="cw-header__nav">
        <a href="#" className="cw-header__navlink">NEW CARS</a>
        <a href="#" className="cw-header__navlink">USED CARS</a>
        <a href="#" className="cw-header__navlink">REVIEWS & NEWS</a>
      </nav>
      <div className="cw-header__search-icons">
        <input type="text" className="cw-header__search" placeholder="Search" />
        <button className="cw-header__icon-btn">
          <img src="https://ext.same-assets.com/215381300/3783633550.svg" alt="Notification" height="20" />
        </button>
        <button className="cw-header__icon-btn">
          <img src="https://ext.same-assets.com/215381300/548389142.svg" alt="User" height="20" />
        </button>
      </div>
    </header>
  );
};

export default Header;