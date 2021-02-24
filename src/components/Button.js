import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.875rem 1.75rem;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorBg};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-weight: ${({ theme }) => theme.fondExtra};
  font-size: 0.625rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  transition: all 0.25s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorPrimaryAlt};
  }
`;
const Button = ({ children, linkRef }) => {
  return <ButtonLink to={linkRef}>{children}</ButtonLink>;
};

export default Button;
