import React, { useState } from "react";
import styled, { css } from "styled-components";
import { blueWater } from "../constants/styles/colors";
import CreamButton from "../styledComponents/CreamButton";
import ErrorIndificator from "./ErrorIndificator";
import TextInputWithTitle from "./TextInputWithTitle";

const LoginCard = ({ submit, isBadAuth }) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = () => {
    const authData = { login, password };
    submit(authData);
  };

  return (
    <Сontainer>
      <BlueWaterHeader>Autorization</BlueWaterHeader>
      <TextInputWithTitle title={"login"} onChangeInput={setLogin} />
      <TextInputWithTitle
        title={"password"}
        onChangeInput={setPassword}
        type={"password"}
      />
      <ErrorIndificator isShow={isBadAuth} styles={erorLoginIndicatorStyles} />
      <CreamButton onClick={onSubmit}>Submit</CreamButton>
    </Сontainer>
  );
};

export default LoginCard;

const Сontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 320px;
  border-radius: 6px;
  background-color: white;
  border: 5px solid ${blueWater};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BlueWaterHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 70px;
  margin: 20px 0 25px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: ${blueWater};
`;

const erorLoginIndicatorStyles = css`
  margin-top: 232px;
`;
