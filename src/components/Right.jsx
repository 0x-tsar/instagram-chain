import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/provider";

import fleekStorage from "@fleekhq/fleek-storage-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";

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
  const [state, setState] = useState({
    description: "",
    pictureHash: "",
  });

  const { web3, instagram } = useContext(AuthContext);

  console.log(web3);
  console.log(instagram);

  const setStorage = async (e) => {
    const data = e.target.files[0];

    try {
      const uploadedFile = await fleekStorage.upload({
        apiKey: "+Gxl/Kv/k+cdc1W4dTyP4Q==",
        apiSecret: "+ldkPR3rw+7jp6j74Koi5/8JHHPD2zwx40uxekH1hEw=",
        key: data.name,
        data: data,
      });

      //   // const tx = await info.bookContract.methods
      //   //   .createNewBook("book 2", value, bookUrl)
      //   //   .send({ from: info.currentAddress });
      //   // console.log(tx);

      setState({
        ...state,
        pictureHash: `https://ipfs.io/ipfs/${uploadedFile.hash}`,
      });
      console.log(uploadedFile);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const notify = () => toast("❌ A Picture and a description must be provided");

  const submit = (e) => {
    e.preventDefault();

    console.log(instagram);
    // if (instagram) console.log(instagram);

    if (state.description !== "" && state.pictureHash !== "") {
      console.log(state);
      confetti({
        particleCount: 300,
        spread: 200,
        origin: { x: 0.5, y: 0.3 },
      });
    } else {
      notify();
      return;
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Holder></Holder>
      <HolderCreatePost>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              value={state.description}
              type="text"
              className="form-control"
              id="message"
              aria-describedby="emailHelp"
              placeholder="your post message here"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardUrlPicture">Picture Url</label>
            <input
              type="file"
              onChange={setStorage}
              defaultValue={""}
              // className="form-control p-3"
              // id="cardUrlPicture"
              aria-describedby="cardUrlPicture"
              // placeholder="Card Input"
            />
          </div>

          <button type="submit" className="btn btn-primary w-50 h-20 mb-3">
            Create Post
          </button>
        </form>
      </HolderCreatePost>
    </Container>
  );
};

export default Right;
