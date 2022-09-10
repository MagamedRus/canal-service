import React from "react";
import styled, { css } from "styled-components";
import ErrorBorderText from "../styledComponents/ErrorBorderText";
import ErrorText from "../styledComponents/ErrorText";

const ErrorIndificator = ({ isShow, styles }) => {
  return (
    <Container isShow={isShow} styles={styles}>
      <ErrorBorderText>!</ErrorBorderText>
      <ErrorText>Bad auth: Invalid login or password!</ErrorText>
    </Container>
  );
};

export default ErrorIndificator;

const Container = styled.div`
  height: 20px;
  position: absolute;
  ${(props) => css`
    display: ${props.isShow ? "flex" : "none"};
    ${props.styles || ""}
  `}
`;
