import React from "react";
import styled from "styled-components";
import PublishCard from "../components/PublishCard";

function PublishesPage() {
  return (
    <Container>
      <PublishCard />
    </Container>
  );
}

export default PublishesPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 138px 0px 90px 0px;
`;
