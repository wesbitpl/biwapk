import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledFace, StyledProfile } from "./Header.styled";
import Burger from "../Burger/Burger";
import Icon from "../../assets/images/icon.svg";
import Face from "../../assets/images/Face.png";
import { logout } from "../../utils/logout/logout";
export default function Header({ open, setOpen, isLogin, setIsLogin, user }) {
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Link to="/" onClick={() => setOpen(false)}>
        <img src={Icon} alt="logo icon" height="50px" />
      </Link>
      {isLogin ? (
        <StyledFace onClick={() => setProfileModalIsOpen(!profileModalIsOpen)}>
          <img src={Face} alt="face" />
          {profileModalIsOpen ? (
            <StyledProfile>
              <h4>{user.username}</h4>
              <button
                onClick={() => {
                  setIsLogin(false);
                  logout();
                }}>
                Wyloguj
              </button>
            </StyledProfile>
          ) : (
            ""
          )}
        </StyledFace>
      ) : (
        ""
      )}
      {isLogin ? <Burger open={open} setOpen={setOpen} /> : ""}
    </StyledHeader>
  );
}
