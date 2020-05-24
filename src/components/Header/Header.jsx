import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import Burger from "../Burger/Burger";
import Icon from "../../assets/images/icon.svg";
import Face from "../../assets/images/Face.png";
export default function Header({ open, setOpen }) {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={Icon} alt="logo icon" height="50px" />
      </Link>
      <div className="face">
        <img src={Face} alt="face" />
      </div>
      <Burger open={open} setOpen={setOpen} />
    </StyledHeader>
  );
}
