import React from "react";
import { NavLists, NavItem, NavLink } from "./NavbarElements";

const Navbar = ({ handleToggle }) => {
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
          onClick={handleToggle}
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
          onClick={handleToggle}
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
          onClick={handleToggle}
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
          onClick={handleToggle}
        >
          Contáctanos
        </NavLink>
      </NavItem>
    </NavLists>
  );
};

export default Navbar;
