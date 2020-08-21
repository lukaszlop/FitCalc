import React, { Component } from "react";
import "./NavBar.scss";
import "../Container/Container.scss";
import NavBarLogo from "./Nav_bar_logo/NavBarLogo";
import NavBarMenu from "./Nav_bar_menu/NavBarMenu";

class NavBar extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
      window.addEventListener('scroll', () => {
          const isTop = window.scrollY < 0;
          if (isTop !== true) {
              this.setState({scrolled: true});
          } else {
              this.setState({scrolled: false});
          }
      });
  }

  componentWillUnmount() {
      window.removeEventListener('scroll');
  }

  render() {
    return (
      <>
        <header className={this.state.scrolled ? 'app-header scrolled' : 'app-header'}>
          <div className="container">
            <NavBarLogo />
            <NavBarMenu />
          </div>
        </header>
      </>
    );
  }
}

export default NavBar;
