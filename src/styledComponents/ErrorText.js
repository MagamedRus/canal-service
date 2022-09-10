import styled from "styled-components";
import { errorColor } from "../constants/styles/colors";

const ErrorText = styled.p`
  font-size: 14px;
  margin: 0;
  font-family: "Inter";
  font-weight: 400;
  color: ${errorColor};
`;

export default ErrorText;
