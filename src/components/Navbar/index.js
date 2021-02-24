import React from "react";
import { NavLists, NavItem, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <NavLists>
      <NavItem>
        <NavLink to="/">Inicio</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Caracteristicas</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Apoyo</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Contáctanos</NavLink>
      </NavItem>
    </NavLists>
  );
};

export default Navbar;
