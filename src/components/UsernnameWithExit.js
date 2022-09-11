import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ExitButton from "../styledComponents/ExitButton";
import Username from "../styledComponents/Username";
import { resetAuth } from "../store/action-creators/auth";
import { deviceSizes } from "../constants/styles/sizes";

const UsernameWithExit = ({ username }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(resetAuth());
    navigate("auth");
  };

  return (
    <Container>
      <Username>{username}</Username>
      <ExitButton onClick={exit} />
    </Container>
  );
};

export default UsernameWithExit;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-width;
  height: 56px;
  margin-right: 35px;
  @media ${deviceSizes.tablet} {
    margin-right: 35px;
  }
  @media ${deviceSizes.mobileL} {
    margin-right: 15px;
  }
`;
