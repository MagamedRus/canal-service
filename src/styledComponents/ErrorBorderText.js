import styled from "styled-components";
import { errorColor } from "../constants/styles/colors";

const ErrorBorderText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: "Inter";
  font-size: 400;
  color: white;
  background-color: ${errorColor};
  border-radius: 50%;
  height: 14px;
  width: 14px;
  padding: 2px;
  margin: 0 10px 0 0;
`;

export default ErrorBorderText;
