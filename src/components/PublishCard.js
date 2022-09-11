import React from "react";
import styled from "styled-components";
import { blueWater } from "../constants/styles/colors";
import BoldText from "../styledComponents/BoldText";

const PublishCard = ({ publishData }) => (
  <Container>
    {/* Looks not good, but grid even worse */}
    <TopContent>
      <SquareImage
        src="https://via.placeholder.com/150/810b14"
        alt="Post image"
      />
      <RightTopContent>
        <BoldText>Author: Leannne Grahama</BoldText>
        <BoldText>Company: Leannne Grahama</BoldText>
      </RightTopContent>
    </TopContent>
    <BottomContent>
      <BoldText>
        Title:sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </BoldText>
      <BoldText>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </BoldText>
    </BottomContent>
  </Container>
);

export default PublishCard;

const Container = styled.div`
  width: 406px;
  height: 336px;
  background: white;
  border: 5px solid ${blueWater};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 25px 21px 26px 21px;
`;

const TopContent = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

const RightTopContent = styled.div`
  margin-left: 30px;
  width: 245px;

  p:nth-of-type(1) {
    margin-bottom: 11px;
  }
`;

const SquareImage = styled.img`
  height: 150px;
  width: 150px;
`;

const BottomContent = styled.div`
  p:nth-child(1) {
    margin-bottom: 24px;
    min-height: 62px;
  }
  p:nth-child(2) {
    min-height: 90px;
  }
`;
