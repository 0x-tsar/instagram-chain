import "../../styles/globals.css";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
// import Main from "../components/Main";
import Right from "../components/Right";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-rows: 80px min-content;
  grid-template-areas:
    "header header"
    "main right";
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header></Header>
      {/* <Main></Main> */}
      <Right></Right>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
