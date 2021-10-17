import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  /* width: 900px; */
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  grid-area: posts;
`;

const PostsHolder = () => {
  return <Container></Container>;
};

export default PostsHolder;
