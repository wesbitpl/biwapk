import React from "react";
import { NavLink, Link } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu, StyledNavLink } from "./Menu.styled";
import { ReactComponent as HomeIcon } from "../../assets/images/menuIcons/home.svg";
import { ReactComponent as PlusIcon } from "../../assets/images/menuIcons/plus.svg";
import { ReactComponent as ListIcon } from "../../assets/images/menuIcons/list.svg";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledNavLink exact to="/" onClick={() => setOpen(!open)}>
        <HomeIcon />
      </StyledNavLink>
      <StyledNavLink exact to="/add" onClick={() => setOpen(!open)}>
        <PlusIcon />
      </StyledNavLink>
      <StyledNavLink exact to="/list" onClick={() => setOpen(!open)}>
        <ListIcon />
      </StyledNavLink>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
