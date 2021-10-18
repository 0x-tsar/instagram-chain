import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  grid-area: stories;

  display: flex;
  position: relative;
  align-items: center;
  overflow-x: scroll;
`;

const eachStory = () => {
  return (
    <div
      style={{
        width: "70px",
        height: "70px",
        backgroundColor: "black",
        borderRadius: "35px",
        marginLeft: "10px",
        backgroundColor: "cyan",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: "black",
          borderRadius: "30px",
          marginTop: "5px",
          marginLeft: "5px",
          position: "absolute",
        }}
      ></div>
    </div>
  );
};

const Stories = () => {
  return (
    <Container>
      {eachStory()}
      {eachStory()}
      {eachStory()}
      {eachStory()}
      {eachStory()}
      {eachStory()}
      {eachStory()}
    </Container>
  );
};

export default Stories;
