import React, { Component } from "react";
import "./NavBar.scss";
import "../Container/Container.scss";
import NavBarLogo from "./Nav_bar_logo/NavBarLogo";
import NavBarMenu from "./Nav_bar_menu/NavBarMenu";

class NavBar extends Component {
  state = {
    scrolled: false,
  };

  listener = () => {
    const isTop = window.scrollY < 120;
    if (isTop !== true) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <>
        <header
          id="header"
          className={this.state.scrolled ? "app-header scrolled" : "app-header"}
        >
          {/* <div  className="app-header__user__name">
          <p>Cześć <span>nazwaużytkownika</span></p>
          </div> */}
          <div className="container">
            <NavBarLogo />
            <NavBarMenu />
          </div>{" "}
        </header>{" "}
      </>
    );
  }
}

export default NavBar;
