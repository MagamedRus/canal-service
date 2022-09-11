import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginCard from "../components/LoginCard";
import { basePath } from "../constants/routePath";
import { authUser } from "../controllers/user";
import { setAuth } from "../store/action-creators/auth";

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
      dispatch(setAuth(userData));
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
