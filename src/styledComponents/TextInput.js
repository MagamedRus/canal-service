import styled from "styled-components";
import { blueWater } from "../constants/styles/colors";

const TextInput = styled.input.attrs((props) => ({
  type: "text",
  ...props,
}))`
  height: 37px;
  width: 285px;
  background-color: #d9d9d9;
  padding: 0 5px;
  border: 4px solid ${blueWater};
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  outline: none;
`;

export default TextInput;
