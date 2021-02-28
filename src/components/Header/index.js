import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderLogo,
  ImageLogo,
  LogoH1,
  LogoSpan,
  HeaderNavBar,
} from "./HeaderElements";
import Navbar from "../Navbar";
import { BsMenu } from "../../icons/basics";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <HeaderWrapper>
      <HeaderLogo to="/">
        <ImageLogo src={logo} />
        <LogoH1>
          Coron<LogoSpan>app</LogoSpan>
        </LogoH1>
      </HeaderLogo>
      <HeaderMenu type="button" onClick={handleToggle} role="button">
        <BsMenu />
      </HeaderMenu>
      <HeaderNavBar toggle={toggle}>
        <Navbar handleToggle={handleToggle} />
      </HeaderNavBar>
    </HeaderWrapper>
  );
};

export default Header;
