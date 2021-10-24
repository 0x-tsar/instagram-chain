import React, { createContext, useEffect, useState } from "react";
import loadEthereum from "../ethereum";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [instagram, setInstgram] = useState(undefined);
  const [posts, setPosts] = useState([]);
  const [myInfos, setMyInfos] = useState([]);
  const [web3, setWeb3] = useState(undefined);

  useEffect(() => {
    const done = async () => {
      const { instagram, web3 } = await loadEthereum();
      if (instagram && web3) {
        const account = await web3.currentProvider.selectedAddress;
        // setMyInfos({
        //   account: account,
        //   // balanceEther: balanceEther,
        //   instagram: instagram,
        //   web3: web3,
        // });

        setWeb3(web3);
        setInstgram(instagram);

        const totalPosts = await instagram.methods.nextId().call();

        for (let i = 0; i < totalPosts; i++) {
          const post = await cards.methods.posts(i).call();
          console.log(post);
        }

        instagram.events
          .PostCreated({})
          .on("data", async function (event) {
            // Do something here
            setPosts((posts) => [...posts, event.returnValues]);
          })
          .on("error", console.error);
      } else {
        console.log("PROBLEM HERE");
      }
    };

    done();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        web3,
        posts,
        instagram,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
