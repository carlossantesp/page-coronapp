import styled from "styled-components";
import { Link } from "react-scroll";

export const NavLists = styled.ul`
  list-style: none;
  ${({ theme }) => theme.mixins.flexColumn};
  @media screen and (min-width: 992px) {
    flex-direction: initial;
  }
`;
export const NavItem = styled.li`
  display: block;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  padding: 0 4rem;
  width: 100%;
  @media screen and (min-width: 992px) {
    width: initial;
    padding: 0;
    margin-bottom: 0;
    margin-right: 2.375rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;
export const NavLink = styled(Link)`
  display: block;
  width: inherit;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-weight: ${({ theme }) => theme.fontBold};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    padding: 0;
    font-size: 0.625rem;
    transition: border 0.5s;
    &:hover,
    &.active {
      border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
    }
  }
`;
