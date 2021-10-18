import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: right;
  /* background-color: #f1f1f1; */
  /* background-color: blueviolet; */
`;

export const Holder = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  background-color: yellow;
  /* justify-content: center; */
`;

const Right = () => {
  return (
    <Container>
      <Holder></Holder>
    </Container>
  );
};

export default Right;
