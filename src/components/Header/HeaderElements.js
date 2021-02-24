import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding-top: 2.25rem;
  padding-bottom: 1.5rem;
  ${({ theme }) => theme.mixins.flexBetween};
  overflow: hidden;
  @media screen and (min-width: 992px) {
    margin-right: 18.5rem;
    &::after {
      content: "";
      position: absolute;
      width: 18.4375rem;
      height: 43.75rem;
      top: 0;
      right: 0;
      background-color: ${({ theme }) => theme.colorPrimary};
      border-radius: 2rem 0 0 2rem;
    }
  }
`;
export const HeaderLogo = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colorText};
`;
export const ImageLogo = styled.img`
  width: 2.5rem;
  margin-right: 0.5rem;
`;
export const LogoH1 = styled.h1`
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontBold};
`;
export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: inherit;
  font-size: inherit;
`;
export const HeaderMenu = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  padding: 0.5rem;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
export const HeaderNavBar = styled.nav`
  position: fixed;
  top: calc(2.5rem + 3.75rem);
  right: ${({ toggle }) => (toggle ? "0" : "-100%")};
  z-index: 1;
  width: 20rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorBg};
  padding-top: 3rem;
  transition: all 0.5s;
  @media screen and (min-width: 992px) {
    position: initial;
    background-color: transparent;
    color: ${({ theme }) => theme.colorText};
    width: initial;
    height: initial;
    padding-top: 0;
  }
`;
