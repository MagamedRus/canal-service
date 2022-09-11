import styled from "styled-components";
import { cream } from "../constants/styles/colors";
import { deviceSizes } from "../constants/styles/sizes";

const CreamButton = styled.button`
  width: 213px;
  height: 43px;
  background: ${cream};
  border-radius: 10px;
  border: 0;
  padding: 0;
  outline: none;
  margin: 25px auto 22px auto;
  /** Text styles*/
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  
  @media ${deviceSizes.tabletS} {
    margin-top: 23px;
  }
`;

export default CreamButton;
