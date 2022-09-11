import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";
import titledLogo from "../assets/images/titledLogo.svg";
import logo from "../assets/images/logo.svg";

const Logo = styled.div`
  height: 63px;
  width: 273px;
  background-image: url(${titledLogo});
  background-repeat: no-repeat;
  margin-left: 41px;
  @media ${deviceSizes.tablet} {
    margin-left: 37px;
  }
  @media ${deviceSizes.mobileL} {
    background-image: url(${logo});
    width: 70px;
    margin-left: 15px;
  }
`;

export default Logo;
