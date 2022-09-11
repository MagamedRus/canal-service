import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginCard from "../components/LoginCard";
import { basePath } from "../constants/routePath";
import { AuthActions } from "../constants/store/actionTypes";

function AuthPage() {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sumbit = () => {
    const userData = {}; //Todo: make request here
    !userData && setIsError(true);
    dispatch({ type: AuthActions.SET_AUTH_DATA, payload: userData });
    navigate(basePath);
  };

  return (
    <Container>
      <LoginCard sumbit={sumbit} isBadAuth={isError} />
    </Container>
  );
}

export default AuthPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;
