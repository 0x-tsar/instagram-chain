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
export const HolderCreatePost = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-left: 20px;
  /* border: 1.5px solid rgb(0, 0, 0, 0.6); */
  box-shadow: 3px px rgb(0, 0, 0, 0.2);
  margin-top: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Right = () => {
  return (
    <Container>
      <Holder></Holder>
      <HolderCreatePost>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}

          <button type="submit" className="btn btn-primary w-50 h-20 mb-3">
            Create Post
          </button>
        </form>
      </HolderCreatePost>
    </Container>
  );
};

export default Right;
