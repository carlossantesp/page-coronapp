import React from "react";
import { NavLists, NavItem, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <NavLists>
      <NavItem>
        <NavLink
          to="root"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          exact="true"
        >
          Inicio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="features"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          exact="true"
        >
          Caracteristicas
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="experts"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          exact="true"
        >
          Apoyo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="attentions"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          exact="true"
        >
          Contáctanos
        </NavLink>
      </NavItem>
    </NavLists>
  );
};

export default Navbar;
