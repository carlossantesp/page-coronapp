import React from "react";
import { FooterWrapper, LinkApp, ImageApp } from "./FooterElements";
import logoGooglePlay from "../../assets/images/play-store.png";
import logoAppStore from "../../assets/images/ios-market.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkApp
        href="https://play.google.com/store"
        target="_blank"
        role="button"
      >
        <ImageApp src={logoGooglePlay} alt="Aplicación Google play" />
      </LinkApp>
      <LinkApp
        href="https://www.apple.com/la/app-store/"
        target="_blank"
        role="button"
      >
        <ImageApp src={logoAppStore} alt="Aplicación App Store" />
      </LinkApp>
    </FooterWrapper>
  );
};

export default Footer;
