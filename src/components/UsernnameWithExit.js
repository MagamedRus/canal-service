import React from "react";
import styled from "styled-components";
import ExitButton from "../styledComponents/ExitButton";
import Username from "../styledComponents/Username";

const UsernameWithExit = ({ username }) => (
  <Container>
    <Username>{username}</Username>
    <ExitButton />
  </Container>
);

export default UsernameWithExit;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-width;
  height: 56px;
  margin-right: 34px;
`;
