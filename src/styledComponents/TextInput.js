import styled from "styled-components";
import { blueWater } from "../constants/styles/colors";
import { deviceSizes } from "../constants/styles/sizes";

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

  /* На макете инпут у пароля был меньшей высоты,
    думаю это ошибка, по этому не стал ничего менять
    P.S. Обычно я не пишу комментарии на русском)  */
  @media ${deviceSizes.tabletS} {
    width: 194px;
    font-size: 14px;
    height: 31px;
  }
`;

export default TextInput;
