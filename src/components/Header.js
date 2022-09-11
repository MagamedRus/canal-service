import React from "react";
import Logo from "../styledComponents/Logo";
import styled from "styled-components";
import { cream } from "../constants/styles/colors";
import UsernameWithExit from "./UsernnameWithExit";
import { useSelector } from "react-redux";

const Header = () => {
  const authData = useSelector((state) => state.auth);

  return (
    <HeaderContainer>
      <Logo />
      {authData.username && <UsernameWithExit username={authData.name} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background: ${cream};
  height: 118px;
  width: 100%;
  left: 0px;
  top: 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
