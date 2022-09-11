import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PublishCard from "../components/PublishCard";
import { deviceSizes, onlyDeviceSizes } from "../constants/styles/sizes";
import { getPosts } from "../controllers/post";

function PublishesPage() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const reqPostsData = await getPosts(userData.id);
      reqPostsData.status === 200 && setPosts(reqPostsData.posts);
    })();
  }, [userData.id]);

  return (
    <Container>
      <PublishCards>
        {posts.map((post) => (
          <PublishCard key={post.id} publishData={post} />
        ))}
      </PublishCards>
    </Container>
  );
}

export default PublishesPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 138px 0px 25px 0px;

  @media ${deviceSizes.tabletS} {
    padding-top: 128px;
  }
`;

const PublishCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 13px;

  @media ${onlyDeviceSizes.laptop} {
    row-gap: 25px;
    column-gap: 20px;
  }
  @media ${deviceSizes.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${deviceSizes.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;
