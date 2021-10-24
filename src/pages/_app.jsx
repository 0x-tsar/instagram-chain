import "../../styles/globals.css";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
// import Main from "../components/Main";
import Right from "../components/Right";
// import { useContext } from "react";
import { AuthProvider } from "../context/provider";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  grid-template-rows: 80px min-content;
  grid-template-areas:
    "header header"
    "main right";

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px min-content;
    display: flex;
    justify-content: center;
  }
`;

function MyApp({ Component, pageProps }) {
  // const { web3 } = AuthProvider(useContext);

  return (
    <AuthProvider>
      <Container>
        <Header></Header>
        {/* <Main></Main> */}
        <Right></Right>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
