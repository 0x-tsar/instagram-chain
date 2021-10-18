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
  margin-left: 20px;
  /* justify-content: center; */

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Right = () => {
  return (
    <Container>
      <Holder></Holder>
    </Container>
  );
};

export default Right;
