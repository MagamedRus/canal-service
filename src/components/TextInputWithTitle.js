import React from "react";
import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";
import LowerHeader from "../styledComponents/LowerHeader";
import TextInput from "../styledComponents/TextInput";

const TextInputWithTitle = ({ title, onChangeInput, ...inputProps }) => {
  const onInput = (ev) => onChangeInput(ev.target.value);
  return (
    <Container>
      <LowerHeader>{title}</LowerHeader>
      <TextInput onInput={onInput} {...inputProps} />
    </Container>
  );
};

export default TextInputWithTitle;

const Container = styled.div`
  display: flex;
  width: 440px;
  height: 45px;
  align-items: center;
  justify-content: space-between;

  :nth-of-type(1) {
    margin-bottom: 25px;
    @media ${deviceSizes.tabletS} {
      margin-bottom: 13px;
    }
  }

  @media ${deviceSizes.tabletS} {
    height: 91px;
    width: 212px;
    flex-direction: column;
    align-items: start;
  }
`;
