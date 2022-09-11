import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PublishCard from "../components/PublishCard";
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
  padding: 138px 0px 90px 0px;
`;

const PublishCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  gap: 20px;
`;
