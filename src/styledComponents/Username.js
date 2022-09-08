import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";

const Username = styled.h1`
  display: flex;
  max-width: 390px;
  margin-right: 54px;
  height: inherit;
  line-height: 29px;
  font-size: 24px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;

  @media ${deviceSizes.laptop} {
    display: none;
  }
`;

export default Username;
