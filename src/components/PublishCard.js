import React from "react";
import styled from "styled-components";
import { blueWater } from "../constants/styles/colors";
import { deviceSizes, onlyDeviceSizes } from "../constants/styles/sizes";
import BoldText from "../styledComponents/BoldText";

const PublishCard = ({ publishData }) => (
  <Container>
    <TopContent>
      <SquareImage src={publishData.img} alt="Post image" />
      <RightTopContent>
        <BoldText>Author: {publishData.author}</BoldText>
        <BoldText>Company: {publishData.company}</BoldText>
      </RightTopContent>
    </TopContent>
    <BottomContent>
      <BoldText>Title: {publishData.title}</BoldText>
      <BoldText>{publishData.body}</BoldText>
    </BottomContent>
  </Container>
);

export default PublishCard;

const Container = styled.div`
  width: 416px;
  height: 346px;
  background: white;
  border: 5px solid ${blueWater};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px 15px;

  @media ${onlyDeviceSizes.laptop} {
    width: 277px;
    height: 420px;
    padding: 20px 19px;
  }
  @media ${deviceSizes.tabletS} {
    width: 258px;
    height: 176px;
    padding: 7px 12px;
  }
`;

const TopContent = styled.div`
  display: flex;
  margin-bottom: 11px;
  @media ${onlyDeviceSizes.laptop} {
    flex-direction: column;
    margin-bottom: 0;
  }
  @media ${deviceSizes.tabletS} {
    margin-bottom: 0;
  }
`;

const RightTopContent = styled.div`
  margin-left: 30px;
  width: 245px;

  p:nth-of-type(1) {
    margin-bottom: 11px;
    @media ${onlyDeviceSizes.laptop} {
      margin-bottom: 8px;
    }
    @media ${deviceSizes.tabletS} {
      margin-bottom: 17px;
    }
  }
  p {
    @media ${onlyDeviceSizes.laptop} {
      margin-bottom: 8px;
    }
    @media ${deviceSizes.tabletS} {
      margin-bottom: 17px;
    }
  }

  @media ${onlyDeviceSizes.laptop} {
    margin-left: 0;
    margin-top: 22px;
  }
  @media ${deviceSizes.tabletS} {
    margin-left: 0;
  }
`;

const SquareImage = styled.img`
  height: 150px;
  width: 150px;
  @media ${deviceSizes.tabletS} {
    display: none;
  }
`;

const BottomContent = styled.div`
  p:nth-child(1) {
    margin-bottom: 24px;
    @media ${onlyDeviceSizes.laptop} {
      margin-bottom: 8px;
    }
  }
  p:nth-child(2) {
    @media ${deviceSizes.tabletS} {
      display: none;
    }
  }
`;
