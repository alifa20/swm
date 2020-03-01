import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Card from "./components/Card";
import { Container } from "./App.styled";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card title="Home and away" />
      </Container>
    </>
  );
};

export default App;
