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
      // const { instagram } = await loadEthereum();
      const { instagram, web3 } = await loadEthereum();
      console.log(instagram);
      if (instagram && web3) {
        const account = await web3.currentProvider.selectedAddress;
        // // console.log(await cards.methods.admin().call());

        const totalPosts = await instagram.methods.nextId().call();

        console.log(totalPosts);

        for (let i = 0; i < totalPosts; i++) {
          const post = await cards.methods.posts(i).call();
          console.log(post);
        }

        //     // console.log(item);
        //     setMarketCards((marketCards) => [...marketCards, item]);
        //   }
        // }

        instagram.events
          .PostCreated({})
          .on("data", async function (event) {
            // Do something here
            setPosts((posts) => [...posts, event.returnValues]);
          })
          .on("error", console.error);
      }
    };

    done();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        web3,
        myInfos,
        setMyInfos,
        instagram,
        setInstgram,
        posts,
        setPosts,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
