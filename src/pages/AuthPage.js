import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginCard from "../components/LoginCard";
import { basePath } from "../constants/routePath";
import { AuthActions } from "../constants/store/actionTypes";
import { authUser } from "../controllers/user";

function AuthPage() {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (authData) => {
    const reqAuthData = await authUser(authData);
    if (reqAuthData.status !== 200) {
      setIsError(true);
    } else {
      const userData = reqAuthData.userData;
      dispatch({ type: AuthActions.SET_AUTH_DATA, payload: userData });
      navigate(basePath);
    }
  };

  return (
    <Container>
      <LoginCard submit={submit} isBadAuth={isError} />
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
