import React from "react";
import styled from "styled-components";
import LoginCard from "../components/LoginCard";

function AuthPage() {
  return (
    <Container>
      <LoginCard />
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
