import styled from "styled-components";
import { cream } from "../constants/styles/colors";

const CreamButton = styled.button`
  width: 213px;
  height: 43px;
  background: ${cream};
  border-radius: 10px;
  border: 0;
  outline: none;
  margin: 0 auto 22px auto;
  /** Text styles*/
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;

export default CreamButton;
