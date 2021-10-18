import React from "react";
import styled from "styled-components";
import Posts from "./Posts";

export const Container = styled.div`
  /* width: 900px; */
  /* background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3); */
  grid-area: posts;

  display: flex;
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  flex-direction: column;
`;

const PostsHolder = () => {
  return (
    <Container>
      <Posts></Posts>
      <Posts></Posts>
      <Posts></Posts>
    </Container>
  );
};

export default PostsHolder;
